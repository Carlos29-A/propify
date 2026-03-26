import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { propertyTable } from "./property";

export const propertyImageTable = pgTable("property_image", {
    id: uuid("id").primaryKey(),
    // URLs de Cloudinary suelen superar 255 caracteres con transformaciones.
    url: text("url").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),


    // Relaciones con la tabla de propiedades
    propertyId: uuid("property_id").references(() => propertyTable.id, {
        onDelete: "cascade",
    }),
});