"use client";

import { User } from "@/src/features/auth/types/user";
import { HeartIcon, HomeIcon, HouseIcon, LogOutIcon } from "lucide-react";
import Link from "next/link"
import { useState } from "react";



export const TopMenu = ({ user }: { user: User }) => {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm px-6 py-3">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8 justify-between w-full mx-5">
                    <Link href="/">
                        { /* Logo */}
                        <div className="flex  gap-2">
                            <img src="/file.svg" alt="Logo" width={30} height={30} />
                            <span className="text-2xl font-black tracking-tight text-blue-700">Propify</span>
                        </div>

                    </Link>
                    <div className="hidden md:flex gap-6">
                        <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#"> Comprar </a>
                        <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#"> Quienes Somos</a>
                        <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#"> Servicios</a>
                        <a className="text-slate-600 hover:text-blue-700 transition-colors text-sm font-semibold" href="#"> Contacto</a>
                    </div>

                    {
                        user ? (
                            <div className="flex items-center gap-4">
                                <div
                                    onClick={() => setShowMenu(!showMenu)}
                                    className="cursor-pointer h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold overflow-hidden">
                                    User
                                </div>
                            </div>
                        ) : (
                            <div >
                                Registrarse
                            </div>
                        )
                    }
                    {
                        showMenu && (
                            <div className="absolute top-16 right-6 w-48 bg-white rounded-lg shadow-lg">
                                <nav className="flex flex-col gap-2">
                                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 rounded-md">
                                        <HomeIcon className="w-4 h-4" />
                                        <span>Panel</span>
                                    </Link>
                                    <Link href="/dashboard/properties" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 rounded-md">
                                        <HouseIcon className="w-4 h-4" />
                                        <span>Mis Propiedades</span>
                                    </Link>
                                    <Link href="/dashboard/favorites" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 rounded-md">
                                        <HeartIcon className="w-4 h-4" />
                                        <span>Favoritos</span>
                                    </Link>
                                    <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 rounded-md">
                                        <LogOutIcon className="w-4 h-4" />
                                        <span>Cerrar sesión</span>
                                    </Link>

                                </nav>
                            </div>
                        )
                    }
                </div>

            </div>
        </nav>
    )
}
