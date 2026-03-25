import { z } from "zod";


export const authSchema = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    email: z.string().email("El correo electrónico no es válido"),
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
});


export const loginSchema = z.object({
    email: z.string().email("El correo electrónico no es válido"),
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});