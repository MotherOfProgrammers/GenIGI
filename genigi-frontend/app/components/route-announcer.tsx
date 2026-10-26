"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function RouteAnnouncer() {
  const pathname = usePathname();
  const firstRoute = useRef(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }

    const main = document.getElementById("main");
    main?.focus({ preventScroll: true });

    const timer = window.setTimeout(() => {
      const heading = main?.querySelector("h1");
      const headingText = heading
        ? Array.from(heading.childNodes)
            .map((node) => node.textContent ?? "")
            .join(" ")
            .replace(/\s+/g, " ")
            .trim()
        : "";
      const label =
        headingText || document.title.replace(/\s+/g, " ").trim();

      if (label) {
        const sentence = /[.!?]$/.test(label) ? label : `${label}.`;
        setMessage(`${sentence} Page loaded.`);
      }
    }, 120);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {message}
    </p>
  );
}
