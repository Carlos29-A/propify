import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/src/fonts/inter";
import { manrope } from "@/src/fonts/manrope";

export const metadata: Metadata = {
  title: "Bienes Raices",
  description: "Venta y alquiler de propiedades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className="flex min-h-full flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
