"use client";

import Link from "next/link";


interface ButtonProps {
    href: string;
    children: React.ReactNode;
}



export const Button = ({ href, children }: ButtonProps) => {
    return (
        <>
            <Link
                href={href}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer">
                {children}
            </Link>

        </>
    )
}
