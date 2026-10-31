import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import Database from "better-sqlite3";
import { googleEnabled } from "./auth-flags";

export const auth = betterAuth({
  database: new Database(process.env.AUTH_DB_PATH ?? "auth.sqlite"),
  emailAndPassword: { enabled: true },
  socialProviders: googleEnabled
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
      }
    : {},
  plugins: [nextCookies()],
});
