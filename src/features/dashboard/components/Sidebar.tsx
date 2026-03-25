"use client";

import { HouseIcon, HeartIcon, MessageCircleIcon, UserIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Sidebar = () => {

    const pathname = usePathname();

    // Verificar si la ruta es la misma
    const isHome = pathname === "/dashboard";
    const isProperties = pathname === "/dashboard/properties";
    const isFavorites = pathname === "/dashboard/favorites";
    const isMessages = pathname === "/dashboard/messages";
    const isProfile = pathname === "/dashboard/profile";

    return (
        <>
            {/* Sidebar */}
            <aside className="w-72 hidden md:flex flex-col gap-2 bg-blue-50 p-6">
                <div className="mb-8 px-4 pt-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Gestionar Cuenta</p>
                </div>
                <nav className="flex flex-col gap-1">
                    <Link className={`flex items-center gap-3 px-4 py-3  text-gray-500 rounded transition-all ${isHome ? "bg-blue-400 text-white" : " hover:bg-blue-100 "}`} href="/dashboard">
                        <HomeIcon className="w-4 h-4" /> Inicio
                    </Link>

                    <Link className={`flex items-center gap-3 px-4 py-3  text-gray-500 rounded transition-all ${isProperties ? "bg-blue-400 text-white" : " hover:bg-blue-100 "}`} href="/dashboard/properties">
                        <HouseIcon className="w-4 h-4" /> Mis Propiedades
                    </Link>
                    <Link className={`flex items-center gap-3 px-4 py-3 text-gray-500 rounded transition-all ${isFavorites ? "bg-blue-400 text-white" : " hover:bg-blue-100 "}`} href="/dashboard/favorites">
                        <HeartIcon className="w-4 h-4" /> Favoritos
                    </Link>
                    <Link className={`flex items-center gap-3 px-4 py-3 text-gray-500  rounded transition-all ${isMessages ? "bg-blue-400 text-white" : " hover:bg-blue-100 "}`} href="/dashboard/messages">
                        <MessageCircleIcon className="w-4 h-4" /> Mensajes
                    </Link>
                    <Link className={`flex items-center gap-3 px-4 py-3 text-gray-500  rounded transition-all ${isProfile ? "bg-blue-400 text-white" : " hover:bg-blue-100 "}`} href="/dashboard/profile">
                        <UserIcon className="w-4 h-4" /> Perfil
                    </Link>
                </nav>
                <div className="mt-auto p-4 bg-blue-100 rounded-2xl">
                    <p className="text-sm font-bold">Pro Plan</p>
                    <p className="text-xs text-gray-500 mt-1">Propiedades ilimitadas &amp; Análisis Premium</p>
                    <button className="mt-4 w-full py-2 bg-gray-900 text-white text-xs font-bold rounded-lg">
                        Actualizar Ahora
                    </button>
                </div>
            </aside>
        </>
    )
}
