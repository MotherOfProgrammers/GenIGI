import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import Database from "better-sqlite3";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

export const googleEnabled = Boolean(googleClientId && googleClientSecret);

export const auth = betterAuth({
  database: new Database(process.env.AUTH_DB_PATH ?? "auth.sqlite"),
  emailAndPassword: { enabled: true },
  socialProviders: googleEnabled
    ? {
        google: {
          clientId: googleClientId as string,
          clientSecret: googleClientSecret as string,
        },
      }
    : {},
  plugins: [nextCookies()],
});
