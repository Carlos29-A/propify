"use server";

import { LoginUserInput } from "../types/login-user";
import { loginSchema } from "../schemas/auth.schema";
import { auth } from "@/src/lib/auth";
import { isAPIError } from "better-auth/api";

export const loginAction = async (formData: LoginUserInput) => {
    const data = {
        email: formData.email,
        password: formData.password,
    }

    // Validar con zod
    const parsedData = loginSchema.safeParse(data);

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

        //Login con better-auth
        const result = await auth.api.signInEmail({
            body: {
                email: parsedData.data.email,
                password: parsedData.data.password,
            }
        })

        return {
            success: true,
            message: "Inicio de sesión exitoso",
            user: result.user
        }


    } catch (error) {
        console.error(error);
        if (isAPIError(error)) {
            return {
                success: false,
                errors: [error.message],
            }
        }
        return {
            success: false,
            errors: [error instanceof Error ? error.message : "No se pudo iniciar sesión"],
        }
    }
}