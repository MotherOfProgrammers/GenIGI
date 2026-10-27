// Creates/updates the Better Auth tables in the SQLite file. Run: npm run auth:migrate
import { getMigrations } from "better-auth/db/migration";
import { auth } from "../app/auth.ts";

const { toBeCreated, toBeAdded, runMigrations } = await getMigrations(auth.options);

if (toBeCreated.length === 0 && toBeAdded.length === 0) {
  console.log("Auth schema is up to date.");
} else {
  await runMigrations();
  console.log(
    `Auth schema migrated (created: ${toBeCreated.map((t) => t.table).join(", ") || "none"}).`,
  );
}
