import type { InferSelectModel } from "drizzle-orm";
import { propertyImageTable, propertyTable, propertyTypeTable } from "@/src/db/schema";

/** Fila devuelta por `getPropertiesByUser` (join Drizzle). */
export type PropertyListRow = {
    property: InferSelectModel<typeof propertyTable>;
    property_type: InferSelectModel<typeof propertyTypeTable>;
    property_image: InferSelectModel<typeof propertyImageTable>;
};

export interface PropertyFormData {
    id?: string;
    title: string;
    description: string;
    price: number;
    location: string;
    rooms: number;
    bathrooms: number;
    area: number;
    typeId: number;
    images?: FileList;
}

export interface Property {
    id: string;
    title: string;
    description: string;
    price: string;
    location: string;
    rooms: number;
    bathrooms: number;
    area: string;
    typeId: number;
    userId: string;
}

export interface PropertyType {
    id: number;
    name: string;
}

