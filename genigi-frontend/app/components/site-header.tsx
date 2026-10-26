"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GITHUB_URL } from "../site-config";
import { CloseIcon, GitHubIcon, MarkIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

type NavItem = {
  href: string;
  label: string;
  aliases?: string[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/mods", label: "Workboard" },
  { href: "/about", label: "About" },
  { href: "/login", label: "Accounts", aliases: ["/register"] },
];

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const currentPath = normalizePath(pathname);

  function isActive(item: (typeof navItems)[number]) {
    return normalizePath(item.href) === currentPath || item.aliases?.includes(currentPath);
  }

  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <Link className="brand" href="/" aria-label="GenIGI home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">
            <MarkIcon />
          </span>
          <span>
            GenIGI
            <small>Project IGI community</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            className="icon-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GenIGI source on GitHub"
            title="GenIGI source on GitHub"
          >
            <GitHubIcon />
          </a>
          <ThemeToggle />
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-toggle-icon" aria-hidden="true">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </span>
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={menuOpen ? "true" : "false"}>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <span className="mobile-menu-link-icon">
              <GitHubIcon />
            </span>
            Source on GitHub
          </a>
        </nav>
        <div className="mobile-menu-foot">
          <ThemeToggle />
          <p className="menu-status">
            <span className="status-dot" aria-hidden="true" />
            No public build yet
          </p>
        </div>
      </div>
    </header>
  );
}
