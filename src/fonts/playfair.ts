import { Playfair_Display } from "next/font/google";

export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    weight: ["400", "500", "600", "700"],
})