"use client";

import Link from "next/link"

export const TopMenu = () => {
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
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold overflow-hidden">
                            <img className="w-full h-full object-cover" alt="Agent" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmfd7qXOm77eZ9T7Xs_dCK0KiAvk-7ihOkYgMsoip1qHLy1Qtq_5w7H0Gk1maNzOwYKK_panzNAoAYfw8yZ0XhA0AgX9Q6hmXWp1_dnV9MvKNVNemTT1BXMnKhLX7yKfEMtT7SnNp08SW-8hBfKchWOKpcWbz5Wxw4Itfbthj5mqMfvn-Hnu8qGKpJfnh7AIj6pToDAodtbf2B3AXfQtgUtJpA63MwwAkeEIm1wxTqgeNHFPrQLJPyVqTtFmJiRtny1i8_grwx7GY-" />
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}
