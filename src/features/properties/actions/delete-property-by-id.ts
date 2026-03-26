"use server";

import { headers } from "next/headers";
import { PropertyService } from "../services/property.service";
import { auth } from "@/src/lib/auth";
import { revalidatePath } from "next/cache";



export const deletePropertyById = async (id: string) => {


    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userId = session?.user?.id ?? session?.session?.userId;
    if (!userId) {
        return {
            success: false,
            errors: ["No estás autenticado"],
        }
    }

    if (!id) {
        return {
            success: false,
            errors: ["ID de propiedad requerido"],
        }
    }

    try {
        const property = await PropertyService.deletePropertyById(id, userId);



        // Revalidar la ruta de la propiedad
        revalidatePath(`/dashboard/properties/${id}`, "page");
        revalidatePath(`/properties/${id}`, "page");
        revalidatePath("/dashboard/properties", "layout");

        return {
            success: true,
            message: "Propiedad eliminada correctamente",
            property,
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            errors: [error instanceof Error ? error.message : "No se pudo eliminar la propiedad"],
        }
    }
}