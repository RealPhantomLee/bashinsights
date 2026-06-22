"use client";

import { useEffect, useRef } from "react";

export default function ThemeTransition() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const el = ref.current;
      if (!el) return;
      el.dataset.direction = (e as CustomEvent).detail.direction;
      el.classList.add("animating");
      setTimeout(() => el.classList.remove("animating"), 750);
    };
    window.addEventListener("theme-transition", handler);
    return () => window.removeEventListener("theme-transition", handler);
  }, []);

  return <div ref={ref} id="theme-overlay" aria-hidden="true" />;
}
