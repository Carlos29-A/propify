import db from "@/src";
import { Property, PropertyFormData, PropertyListRow } from "../types/properie.type";
import { and, eq } from "drizzle-orm";
import { propertyImageTable, propertyTable, propertyTypeTable } from "@/src/db/schema";
import { randomUUID } from "crypto";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config(process.env.CLOUDINARY_URL!);

export class PropertyService {
    static async createProperty(property: PropertyFormData, userId: string, images: File[]) {
        const { id, ...rest } = property;

        try {
            const result = await db.transaction(async (tx) => {

                let property: Property;

                if (id) {
                    // Actualizar la propiedad
                    const [updatedProperty] = await tx
                        .update(propertyTable)
                        .set({
                            title: rest.title,
                            description: rest.description,
                            price: rest.price.toString(),
                            location: rest.location,
                            rooms: rest.rooms,
                            bathrooms: rest.bathrooms,
                            area: rest.area.toString(),
                            typeId: rest.typeId,
                            userId,
                        })
                        .where(
                            and(eq(propertyTable.id, id), eq(propertyTable.userId, userId)),
                        )
                        .returning();
                    if (!updatedProperty) {
                        throw new Error(
                            "No se encontró la propiedad o no tienes permiso para editarla",
                        );
                    }
                    property = updatedProperty;
                } else {
                    // Crear la propiedad
                    const [createdProperty] = await tx.insert(propertyTable).values({
                        id: randomUUID().toString(),
                        title: rest.title,
                        description: rest.description,
                        price: rest.price.toString(),
                        location: rest.location,
                        rooms: rest.rooms,
                        bathrooms: rest.bathrooms,
                        area: rest.area.toString(),
                        typeId: rest.typeId,
                        userId,
                    }).returning();
                    if (!createdProperty) {
                        throw new Error("No se pudo crear la propiedad");
                    }
                    property = createdProperty;
                }

                if (images.length > 0) {
                    const uploadedImages = await PropertyService.uploadImages(images);

                    if (!uploadedImages) {
                        throw new Error("Error al subir las imágenes");
                    }
                    await tx.insert(propertyImageTable).values(uploadedImages.map((image) => ({
                        id: randomUUID().toString(),
                        url: image,
                        propertyId: property.id,
                    })))

                }


                return {
                    property,
                };
            });


            // `layout` invalida listado y todas las rutas bajo /dashboard/properties (incl. [slug])
            revalidatePath("/dashboard/properties", "layout");
            // Ruta dinámica: sin `type` Next 16 no revalida por defecto
            revalidatePath(`/dashboard/properties/${result.property.id}`, "page");
            revalidatePath(`/properties/${result.property.id}`, "page");

            return result.property;

        } catch (error) {
            const msg = error instanceof Error ? error.message : String(error);
            console.error("[PropertyService.createProperty]", msg);
            throw new Error(msg);
        }
    }
    static async uploadImages(images: File[]) {
        try {

            const uploadPromises = images.map(async (image) => {
                try {

                    const buffer = await image.arrayBuffer();
                    const base64Image = Buffer.from(buffer).toString("base64");


                    return cloudinary.uploader.upload(`data:image/jpeg;base64,${base64Image}`)
                        .then((result) => result.secure_url)

                } catch (error) {
                    console.error(error);
                    throw new Error("Error al subir la imagen");
                }
            })
            const uploadedImages = await Promise.all(uploadPromises);

            return uploadedImages;

        } catch (error) {
            console.error(error);
            throw new Error("Error al subir las imágenes");
        }
    }
    static async getPropertyById(id: string): Promise<PropertyListRow | null> {
        const rows: PropertyListRow[] = await db
            .select()
            .from(propertyTable)
            .where(eq(propertyTable.id, id))
            .innerJoin(propertyTypeTable, eq(propertyTable.typeId, propertyTypeTable.id))
            .innerJoin(propertyImageTable, eq(propertyTable.id, propertyImageTable.propertyId));
        const first = rows[0];
        return first ?? null;
    }
    static async deletePropertyById(id: string, userId: string) {
        try {
            const result = await db.transaction(async (tx) => {
                // Primero borra hijas para no violar FK.
                await tx
                    .delete(propertyImageTable)
                    .where(eq(propertyImageTable.propertyId, id));

                const [deletedProperty] = await tx
                    .delete(propertyTable)
                    .where(and(eq(propertyTable.id, id), eq(propertyTable.userId, userId)))
                    .returning();

                if (!deletedProperty) {
                    throw new Error(
                        "No se encontró la propiedad o no tienes permiso para eliminarla",
                    );
                }

                return deletedProperty;
            });

            // El action ya revalida, pero esto ayuda si se llama directo al service.
            revalidatePath("/dashboard/properties", "layout");
            revalidatePath(`/dashboard/properties/${id}`, "page");

            return result;
        } catch (error) {
            console.error(error);
            throw new Error("Error al eliminar la propiedad");
        }
    }
}