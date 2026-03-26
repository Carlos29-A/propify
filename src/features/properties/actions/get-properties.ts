"use server";

import { PropertyService } from "../services/property.service";
import { PropertyListRow } from "../types/properie.type";


export const getProperties = async (): Promise<{ success: boolean, data: PropertyListRow[], errors: string[] }> => {

    try {
        const properties = await PropertyService.getProperties();

        return {
            success: true,
            data: properties,
            errors: [],
        }

    } catch (error) {
        console.error(error);
        return {
            success: false,
            data: [],
            errors: [error instanceof Error ? error.message : "No se pudieron obtener las propiedades"],
        }
    }
}