import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

const themeBootstrap = `try {
  const savedTheme = localStorage.getItem("genigi-theme");
  document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
} catch {
  document.documentElement.dataset.theme = "dark";
}`;

export const metadata: Metadata = {
  title: {
    default: "GenIGI — Project IGI, carried forward",
    template: "%s — GenIGI",
  },
  description: "A player-first Project IGI modding community. Modern quality improvements, with the original story and feel kept intact.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="genigi-theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrap}
        </Script>
      </head>
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
