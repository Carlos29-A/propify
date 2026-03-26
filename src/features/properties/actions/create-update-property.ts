"use server";

import { propertySchema } from "../schemas/propertie.schema";
import type { PropertyFormData } from "../types/properie.type";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { refresh } from "next/cache";
import { PropertyService } from "../services/property.service";

export const createUpdateProperty = async (
    formData: FormData | Record<string, unknown> | PropertyFormData,
    /** Cuando envías un objeto plano desde el cliente, pasa los `File` aquí (no van en el JSON). */
    imageFiles?: File[],
) => {


    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userId = session?.user?.id ?? session?.session?.userId;
    if (!userId) {
        return {
            success: false,
            message: "No estás autenticado",
            errors: ["No estás autenticado"],
        }
    }


    const data = formData instanceof FormData ? Object.fromEntries(formData) : formData;
    const images =
        formData instanceof FormData
            ? formData.getAll("images").filter((v): v is File => v instanceof File)
            : (imageFiles ?? []);

    const parsedData = propertySchema.safeParse(data);
    if (!parsedData.success) {
        console.log(parsedData.error);

        return {
            success: false,
            message: "Datos inválidos",
            errors: parsedData.error.issues.map((issue) => issue.message),
        }
    }
    try {
        const property = await PropertyService.createProperty(parsedData.data, userId, images);

        if (!property) {
            return {
                success: false,
                message: "No se pudo guardar la propiedad",
                errors: ["No se pudo guardar la propiedad"],
            }
        }

        const isUpdate = Boolean(parsedData.data.id);
        // Sincroniza datos de Server Components en el cliente (caché RSC del router)
        refresh();

        return {
            success: true,
            message: isUpdate
                ? "Propiedad actualizada correctamente"
                : "Propiedad creada correctamente",
            property,
        }
    } catch (error) {
        const msg = error instanceof Error ? error.message : "Error desconocido";
        console.error("[createUpdateProperty]", msg);
        return {
            success: false,
            message: msg,
            errors: [msg],
        }
    }
}
