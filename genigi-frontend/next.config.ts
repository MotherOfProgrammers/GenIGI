import type { NextConfig } from "next";

const replitDomains = (process.env.REPLIT_DOMAINS ?? "")
  .split(",")
  .map((domain) => domain.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", ...replitDomains],
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
