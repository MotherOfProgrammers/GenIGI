const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

/**
 * Kept separate from `auth.ts` so pages that only display the flag can be
 * prerendered without pulling Better Auth or better-sqlite3 into the build.
 */
export const googleEnabled = Boolean(googleClientId && googleClientSecret);
