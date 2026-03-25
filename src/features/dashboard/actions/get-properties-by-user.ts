"use server";

import db from "@/src";
import { propertyImageTable, propertyTable, propertyTypeTable } from "@/src/db/schema";
import { auth } from "@/src/lib/auth";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";



export const getPropertiesByUser = async () => {

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

    try {
        const properties = await db.select().from(propertyTable).where(eq(propertyTable.userId, userId))
            .innerJoin(propertyTypeTable, eq(propertyTable.typeId, propertyTypeTable.id))
            .innerJoin(propertyImageTable, eq(propertyTable.id, propertyImageTable.propertyId));

        return properties;

    } catch (error) {
        console.error(error);
        return {
            success: false,
            errors: [error instanceof Error ? error.message : "No se pudieron obtener las propiedades"],
        }
    }
}