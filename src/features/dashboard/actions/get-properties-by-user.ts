"use server";

import db from "@/src";
import { propertyImageTable, propertyTable, propertyTypeTable } from "@/src/db/schema";
import { auth } from "@/src/lib/auth";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { PropertyListRow } from "../../properties/types/properie.type";



export const getPropertiesByUser = async (status?: "active" | "sold" | "pending"): Promise<{ success: boolean, data: PropertyListRow[], errors: string[] }> => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userId = session?.user?.id ?? session?.session?.userId;
    if (!userId) {
        return {
            success: false,
            data: [],
            errors: ["No estás autenticado"],
        }
    }

    try {
        const whereCondition = status
            ? and(eq(propertyTable.userId, userId), eq(propertyTable.status, status))
            : eq(propertyTable.userId, userId);

        const properties = await db.select().from(propertyTable).where(whereCondition)
            .innerJoin(propertyTypeTable, eq(propertyTable.typeId, propertyTypeTable.id))
            .innerJoin(propertyImageTable, eq(propertyTable.id, propertyImageTable.propertyId));

        return {
            success: true,
            data: properties,
            errors: []
        };

    } catch (error) {
        console.error(error);
        return {
            success: false,
            data: [],
            errors: [error instanceof Error ? error.message : "No se pudieron obtener las propiedades"],
        }
    }
}