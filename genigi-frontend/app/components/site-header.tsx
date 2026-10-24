import Link from "next/link";
import { DISCORD_URL } from "../site-config";
import { ThemeToggle } from "./theme-toggle";
import { DiscordIcon, MarkIcon } from "./icons";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <Link className="brand" href="/" aria-label="GenIGI home">
          <span className="brand-mark"><MarkIcon /></span>
          <span>GenIGI<small>Project IGI community</small></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/mods">Mods</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
          <Link className="nav-join" href="/register">Register</Link>
          <a className="discord-link" href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="GenIGI Discord">
            <DiscordIcon />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
