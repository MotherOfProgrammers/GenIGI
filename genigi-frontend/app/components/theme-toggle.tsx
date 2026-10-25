"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    // Ensure theme is set
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    if (current === "light") {
      html.setAttribute("data-theme", "dark");
      try { localStorage.setItem("genigi-theme", "dark"); } catch {}
    } else {
      html.setAttribute("data-theme", "light");
      try { localStorage.setItem("genigi-theme", "light"); } catch {}
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
        </svg>
      </span>
      <span className="theme-toggle-label">MODE</span>
    </button>
  );
}
