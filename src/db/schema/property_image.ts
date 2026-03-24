import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { propertyTable } from "./property";

export const propertyImageTable = pgTable("property_image", {
    id: uuid("id").primaryKey(),
    url: varchar("url", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),


    // Relaciones con la tabla de propiedades
    propertyId: uuid("property_id").references(() => propertyTable.id),
});