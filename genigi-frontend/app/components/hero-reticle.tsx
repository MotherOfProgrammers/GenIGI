"use client";

import { useEffect, useRef } from "react";

/**
 * A targeting reticle that eases toward the pointer inside the hero.
 * Position is written to CSS custom properties on the hero section, so the
 * radar can also tilt toward the cursor. Only mounts for fine pointers with
 * motion allowed.
 */
export function HeroReticle() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const hero = el?.closest<HTMLElement>(".home-hero");
    if (!el || !hero) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!canHover.matches || !motionOk.matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let active = false;

    const frame = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (Math.abs(tx - x) > 0.1 || Math.abs(ty - y) > 0.1) {
        raf = requestAnimationFrame(frame);
      } else {
        raf = 0;
      }
    };

    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!active) {
        active = true;
        x = tx;
        y = ty;
        hero.dataset.aim = "on";
      }
      hero.style.setProperty("--aim-x", ((tx / r.width - 0.5) * 2).toFixed(3));
      hero.style.setProperty("--aim-y", ((ty / r.height - 0.5) * 2).toFixed(3));
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const leave = () => {
      active = false;
      delete hero.dataset.aim;
      hero.style.setProperty("--aim-x", "0");
      hero.style.setProperty("--aim-y", "0");
    };

    const press = () => {
      el.classList.remove("is-fire");
      void el.offsetWidth;
      el.classList.add("is-fire");
    };

    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    hero.addEventListener("pointerdown", press);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
      hero.removeEventListener("pointerdown", press);
      if (raf) cancelAnimationFrame(raf);
      delete hero.dataset.aim;
    };
  }, []);

  return (
    <div className="hero-reticle" ref={ref} aria-hidden="true">
      <span />
    </div>
  );
}
