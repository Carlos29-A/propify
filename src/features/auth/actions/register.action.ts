"use server";

import { authSchema } from "../schemas/auth.schema";
import { RegisterUserInput } from "../types/create-user";
import { auth } from "@/src/lib/auth";
import { isAPIError } from "better-auth/api";

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
        // Delegamos el alta completa a better-auth:
        // 1) crea el usuario (user table)
        // 2) crea la cuenta de credenciales (account table) con el hash
        const result = await auth.api.signUpEmail({
            body: {
                name: parsedData.data.name,
                email: parsedData.data.email,
                password: parsedData.data.password,
            },
        });

        return {
            success: true,
            message: "Usuario creado correctamente",
            user: result.user,
        };
    } catch (e) {
        const message =
            isAPIError(e) ? e.message : e instanceof Error ? e.message : "No se pudo crear el usuario";
        return {
            success: false,
            errors: [message],
        };
    }
}