import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import db from "@/src"
import * as schema from "@/src/db/schema"

// Fallback solo desarrollo: 32 bytes en base64 (≥32 chars, alta entropía). En producción usa BETTER_AUTH_SECRET en .env.
const BETTER_AUTH_SECRET_FALLBACK =
    "BAwIfnjS6Y+BowWHjhTX5d0LQux11cqKQi6M212UdWU=";

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET?.trim() || BETTER_AUTH_SECRET_FALLBACK,
    baseURL: process.env.BETTER_AUTH_URL,
    // Necesario en App Router: aplica Set-Cookie al login y permite leer sesión en server actions.
    plugins: [nextCookies()],
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema,
            user: schema.usersTable,
            session: schema.sessionTable,
            account: schema.accountTable,
            verification: schema.verificationTable,
        },
    }),
    emailAndPassword: {
        enabled: true,
    },
})