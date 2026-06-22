"use client";

import { useEffect } from "react";

export default function MagneticInit() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const targets = document.querySelectorAll<HTMLElement>("[data-magnetic]");
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = Math.max(rect.width, rect.height) * 1.5;
        if (dist < radius) {
          el.style.transform = `translate(${dx * 0.35}px, ${dy * 0.35}px)`;
          el.style.transition = "transform 0.3s ease";
        } else {
          el.style.transform = "none";
          el.style.transition = "transform 0.5s ease";
        }
      }
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
