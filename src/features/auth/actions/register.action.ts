"use server";

import { authSchema } from "../schemas/auth.schema";
import { createUser } from "../services/createUser";
import { RegisterUserInput } from "../types/create-user";

// Reciben los datos del formulario
export const registerAction = async (formData: RegisterUserInput) => {
    // parse
    const parsedData = authSchema.safeParse({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
    })
    if (!parsedData.success) {
        const errors = [
            ...new Set(parsedData.error.issues.map((issue) => issue.message)),
        ];

        return {
            success: false,
            errors,
        };
    }

    try {
        const user = await createUser({
            name: parsedData.data.name,
            email: parsedData.data.email,
            password: parsedData.data.password,
        });

        return {
            success: true,
            message: "Usuario creado correctamente",
            user,
        };
    } catch (e) {
        const message =
            e instanceof Error ? e.message : "No se pudo crear el usuario";
        return {
            success: false,
            errors: [message],
        };
    }
}