import type { NextConfig } from "next";

// GitHub Pages only serves static files, so the Pages workflow builds a static
// export. Local and server builds keep the full app, including the Better Auth
// API route and SQLite-backed sessions.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  ...(isPages
    ? {
        output: "export" as const,
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  allowedDevOrigins: ["127.0.0.1"],
  poweredByHeader: false,
  // better-sqlite3 is a native module: keep it out of the server bundle.
  serverExternalPackages: ["better-sqlite3"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;
