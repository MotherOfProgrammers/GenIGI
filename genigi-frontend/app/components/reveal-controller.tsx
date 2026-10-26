"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function RevealController() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      for (const element of elements) element.classList.add("is-revealed");
      return;
    }

    const revealLine = window.innerHeight * 0.92;
    const belowFold: HTMLElement[] = [];

    for (const element of elements) {
      if (element.getBoundingClientRect().top < revealLine) {
        element.classList.add("is-revealed");
      } else {
        belowFold.push(element);
      }
    }

    if (belowFold.length === 0) return;

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

    for (const element of belowFold) observer.observe(element);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
