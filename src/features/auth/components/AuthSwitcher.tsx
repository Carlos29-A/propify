"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export const AuthSwitcher = () => {

    const pathname = usePathname();
    const isLogin = pathname === "/auth/login" ? "bg-primary text-on-primary" : "text-on-surface-variant";
    const isRegister = pathname === "/auth/register" ? "bg-primary text-on-primary" : "text-on-surface-variant";


    return (
        <div className="mb-8 flex rounded-full bg-surface-container-high p-1">
            <Link
                className={`flex-1 rounded-full py-2.5 text-center text-sm font-semibold transition-all duration-200 hover:text-on-surface ${isLogin}`}
                href="/auth/login"
            >
                Iniciar sesión
            </Link>
            <Link
                className={`flex-1 rounded-full py-2.5 text-center text-sm font-semibold transition-all duration-200 hover:text-on-surface ${isRegister}`}
                href="/auth/register"
            >
                Crear cuenta
            </Link>
        </div>
    )
}
