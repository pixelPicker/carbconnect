import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/db.js";
import { schema } from "../db/schema.js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  trustedOrigins: ["http://localhost:3000", "http://localhost:8080"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      redirectURI: "http://localhost:8080/api/auth/callback/google",
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
