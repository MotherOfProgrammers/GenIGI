"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const transitionTimer = useRef<number | null>(null);
  const nextTheme = mounted && resolvedTheme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.add("theme-transition");
      if (transitionTimer.current !== null) {
        window.clearTimeout(transitionTimer.current);
      }
      transitionTimer.current = window.setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
        transitionTimer.current = null;
      }, 380);
    }

    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <span className="theme-toggle-icon" aria-hidden="true" key={nextTheme}>
        {nextTheme === "light" ? <SunIcon /> : <MoonIcon />}
      </span>
      <span className="theme-toggle-label">{nextTheme}</span>
    </button>
  );
}
