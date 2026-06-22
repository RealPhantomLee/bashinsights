"use client";

import { useEffect } from "react";

export default function TiltInit() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const targets = document.querySelectorAll<HTMLElement>("[data-tilt]");
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        if (
          e.clientX < rect.left - 20 ||
          e.clientX > rect.right + 20 ||
          e.clientY < rect.top - 20 ||
          e.clientY > rect.bottom + 20
        ) continue;
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(1000px) rotateX(${-ny * 12}deg) rotateY(${nx * 12}deg) scale(1.02)`;
        el.style.transition = "transform 0.1s ease";
      }
    };

    const onLeave = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-tilt]");
      if (target) {
        target.style.transform = "none";
        target.style.transition = "transform 0.4s ease";
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
    };
  }, []);

  return null;
}
