import db from "@/src";
import { CreateUserInput } from "../types/create-user";
import { usersTable } from "@/src/db/schema/users";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

export const createUser = async (user: CreateUserInput) => {

    // Verificar si el usuario ya existe
    const existUser = await db.select().from(usersTable).where(eq(usersTable.email, user.email));

    if (existUser.length > 0) {
        throw new Error("El usuario ya existe");
    }
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Insertar el usuario
    const [newUser] = await db.insert(usersTable).values({
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role ?? "user",
    }).returning();

    return newUser
}