
import { renameSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const route = "app/api/auth/[...all]/route.ts";
const disabledRoute = `${route}.pages-disabled`;

if (!existsSync(route)) {
  throw new Error(`Authentication route not found: ${route}`);
}

if (existsSync(disabledRoute)) {
  throw new Error(`Temporary route already exists: ${disabledRoute}`);
}

renameSync(route, disabledRoute);

try {
  const result = spawnSync(
    "bun",
    ["node_modules/next/dist/bin/next", "build"],
    {
      stdio: "inherit",
      env: {
        ...process.env,
        GITHUB_PAGES: "true",
        NEXT_PUBLIC_STATIC_HOSTING: "1",
        NEXT_PUBLIC_BASE_PATH: "/GenIGI",
      },
    },
  );

  if (result.error) throw result.error;

  if (result.status !== 0) {
    process.exitCode = result.status ?? 1;
  }
} finally {
  renameSync(disabledRoute, route);
}
