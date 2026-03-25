import { integer, numeric, pgTable, serial, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { propertyTypeTable } from "./property_type";
import { usersTable } from "./users";

export const propertyTable = pgTable("property", {
    id: uuid("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description").notNull(),
    price: numeric("price").notNull(),
    location: varchar("location", { length: 255 }).notNull(),
    rooms: integer("rooms").notNull(),
    bathrooms: integer("bathrooms").notNull(),
    area: numeric("area").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),


    // Relaciones con la tabla de tipos de propiedades
    typeId: serial("type_id").references(() => propertyTypeTable.id),
    // Relaciones con la tabla de usuarios
    userId: text("user_id").notNull().references(() => usersTable.id),

});