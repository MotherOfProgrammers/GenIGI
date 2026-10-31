"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Reveals `[data-reveal]` blocks as they enter the viewport.
 *
 * The hiding styles are gated behind `.has-reveal`, which is only added once
 * this controller is actually able to observe elements. If JS never runs, or
 * the browser lacks IntersectionObserver, the content stays visible.
 *
 * A MutationObserver picks up blocks that arrive after hydration (streamed
 * server components, client navigation), so a late commit can never leave a
 * section stuck at `opacity: 0`.
 */
export function RevealController() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
        element.classList.add("is-revealed");
      }
      return;
    }

    root.classList.add("has-reveal");

    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.02 },
    );

    function scan() {
      const line = window.innerHeight * 0.92;
      for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
        if (seen.has(element) || element.classList.contains("is-revealed")) continue;
        seen.add(element);
        // Anything already on screen (or above it) is shown right away.
        if (element.getBoundingClientRect().top < line) {
          element.classList.add("is-revealed");
        } else {
          observer.observe(element);
        }
      }
    }

    // Belt and braces: if an observer callback is ever missed (fast jumps,
    // restored scroll positions), a cheap rAF-throttled sweep settles it.
    let frame = 0;
    function sweep() {
      const line = window.innerHeight * 0.92;
      for (const element of document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")) {
        if (element.getBoundingClientRect().top < line) {
          element.classList.add("is-revealed");
          observer.unobserve(element);
        }
      }
    }
    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        sweep();
      });
    }

    scan();

    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
