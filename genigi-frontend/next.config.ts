import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ["127.0.0.1"],
  poweredByHeader: false,
  // better-sqlite3 is a native module: keep it out of the server bundle.
  serverExternalPackages: ["better-sqlite3"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;
