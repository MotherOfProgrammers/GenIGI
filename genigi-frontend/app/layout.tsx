import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans, IBM_Plex_Mono, Tourney } from "next/font/google";
import { RevealController } from "./components/reveal-controller";
import { RouteAnnouncer } from "./components/route-announcer";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

const display = Tourney({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display",
  display: "swap",
});

const subhead = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-subhead",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GenIGI — Project IGI, carried forward",
    template: "%s — GenIGI",
  },
  description:
    "A player-first Project IGI community. Modern quality improvements, with the original story and feel kept intact.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "GenIGI — Project IGI, carried forward",
    description:
      "A player-first Project IGI community. Modern quality improvements, with the original story and feel kept intact.",
    siteName: "GenIGI",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsFlag = "document.documentElement.classList.add('has-js');";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${subhead.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <ThemeProvider>
          <RevealController />
          <RouteAnnouncer />
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div className="site-shell">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
