"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      window.localStorage.setItem("genigi-theme", nextTheme);
    } catch {
      // The selected theme still applies for this visit if storage is unavailable.
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3.5" />
            <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.55 1.55m11.04 11.04 1.55 1.55M2 12h2.2m15.6 0H22M4.93 19.07l1.55-1.55M17.52 6.48l1.55-1.55" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.6 8.6 0 1 0 20.2 15.2Z" />
          </svg>
        )}
      </span>
      <span className="theme-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
