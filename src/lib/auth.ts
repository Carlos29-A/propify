import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import db from "@/src"
import * as schema from "@/src/db/schema"

export const auth = betterAuth({
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