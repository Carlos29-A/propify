"use server";

import { propertySchema } from "../schemas/propertie.schema";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";
import { PropertyService } from "../services/propertice.service";



export const createUpdateProperty = async (
    formData: FormData | Record<string, unknown>,
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
                message: "No se pudo crear la propiedad",
                errors: ["No se pudo crear la propiedad"],
            }
        }

        return {
            success: true,
            message: "Propiedad creada correctamente",
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
