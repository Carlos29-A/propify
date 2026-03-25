"use client";

import { useForm } from "react-hook-form";
import { LoginUserInput } from "../types/login-user";
import { loginAction } from "../actions/login.action";
import { toast } from "react-toastify";
import { PasswordInput } from "@/src/shared/ui";
import { useState } from "react";
import { redirect } from "next/navigation";


export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginUserInput>({})

    // Ver la contraseña del usuario
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = async (data: LoginUserInput) => {
        const result = await loginAction(data);

        if (result.success) {
            toast.success(result.message);
            // Redirigir a su panel de propiedades
            redirect("/dashboard")
        } else {
            result.errors?.forEach((msg) => toast.error(msg));
        }
        reset();
    }

    return (
        <>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-1.5">
                    <label
                        className="ml-1 text-[10px] font-bold tracking-wider text-on-surface-variant uppercase"
                        htmlFor="register-email"
                    >
                        Correo electrónico
                    </label>

                    <input
                        id="register-email"
                        autoComplete="email"
                        className="w-full rounded-xl border-none bg-surface-container-high py-3.5 pr-4 pl-5 text-on-surface transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="name@example.com"
                        type="email"
                        {...register("email", { required: "El correo electrónico es requerido" })}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                </div>

                <div className="space-y-1.5">
                    <label
                        className="ml-1 text-xs font-bold tracking-wider text-on-surface-variant uppercase"
                        htmlFor="register-password"
                    >
                        Password
                    </label>
                    <div className="group relative">
                        <input
                            id="register-password"
                            autoComplete="new-password"
                            className="w-full rounded-xl border-none bg-surface-container-high py-3.5 pr-12 pl-4 text-on-surface transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="••••••••"
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: "La contraseña es requerida" })}
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                        <PasswordInput
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2">
                    <input
                        className="size-5 rounded border-surface-variant bg-surface-container-high text-primary focus:ring-primary"
                        id="terms"
                        type="checkbox"
                    />
                    <label
                        className="cursor-pointer text-sm font-medium text-on-surface-variant text-[11px]"
                        htmlFor="terms"
                    >
                        Recuérdame
                    </label>
                </div>

                <button
                    className="flex w-full items-center justify-center gap-2 cursor-pointer bg-linear-to-br from-primary to-primary-container py-4 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
                    type="submit"
                >
                    <span>Iniciar sesión</span>
                    <span className="material-symbols-outlined text-lg">
                        arrow_forward
                    </span>
                </button>
            </form>
        </>
    )
}
