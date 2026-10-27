"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authClient } from "../auth-client";
import { GITHUB_URL } from "../site-config";
import { CloseIcon, GitHubIcon, MarkIcon, MenuIcon } from "./icons";
import { ScrollProgress } from "./scroll-progress";
import { ThemeToggle } from "./theme-toggle";

type NavItem = {
  href: string;
  label: string;
  aliases?: string[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/mods", label: "Mods" },
  { href: "/about", label: "About" },
];

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const signedIn = Boolean(session?.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  async function signOut() {
    setMenuOpen(false);
    await authClient.signOut();
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const header = headerRef.current;
    const inertTargets = [
      document.querySelector<HTMLElement>("#main"),
      document.querySelector<HTMLElement>(".site-footer"),
      document.querySelector<HTMLElement>(".skip-link"),
    ].filter((element): element is HTMLElement => element !== null);

    for (const element of inertTargets) element.setAttribute("inert", "");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function focusableItems() {
      if (!header) return [];
      return Array.from(
        header.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => element.getClientRects().length > 0);
    }

    const focusFrame = window.requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusableItems();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!header?.contains(event.target as Node)) setMenuOpen(false);
    }

    const wideScreen = window.matchMedia("(min-width: 901px)");
    function onWideScreen(event: MediaQueryListEvent) {
      if (!event.matches) return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    wideScreen.addEventListener("change", onWideScreen);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      wideScreen.removeEventListener("change", onWideScreen);
      for (const element of inertTargets) element.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const currentPath = normalizePath(pathname);

  function isActive(item: (typeof navItems)[number]) {
    return normalizePath(item.href) === currentPath || item.aliases?.includes(currentPath);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <ScrollProgress />
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
          {signedIn ? (
            <>
              <span className="nav-user">{session?.user.name}</span>
              <button className="button secondary nav-button" type="button" onClick={signOut}>
                Sign out
              </button>
            </>
          ) : (
            <Link className="button nav-button" href="/auth?mode=signup">
              Register
            </Link>
          )}
          <a
            className="icon-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GenIGI source on GitHub (opens in a new tab)"
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

      <div
        className="menu-scrim"
        data-open={menuOpen ? "true" : "false"}
        aria-hidden="true"
        onPointerDown={() => setMenuOpen(false)}
      />

      <div
        id="mobile-menu"
        className="mobile-menu"
        data-open={menuOpen ? "true" : "false"}
        ref={menuRef}
      >
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
          {signedIn ? (
            <button type="button" onClick={signOut}>
              Sign out{session?.user.name ? ` (${session.user.name})` : ""}
            </button>
          ) : (
            <Link href="/auth?mode=signup" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
          )}
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
            <span className="sr-only"> (opens in a new tab)</span>
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
