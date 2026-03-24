import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const propertyTypeTable = pgTable("property_type", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});