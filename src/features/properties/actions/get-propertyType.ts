"use server";

import db from "@/src";
import { propertyTypeTable } from "@/src/db/schema";


export const getPropertyType = async () => {
    try {

        const propertyType = await db.select().from(propertyTypeTable)

        if (propertyType.length === 0) {
            return {
                success: false,
                errors: ["No se encontraron tipos de propiedades"],
            }
        }

        return {
            success: true,
            data: propertyType,
        }

    } catch (error) {
        console.error(error);
        return {
            success: false,
            errors: [error instanceof Error ? error.message : "No se pudieron obtener los tipos de propiedades"],
        }
    }
}