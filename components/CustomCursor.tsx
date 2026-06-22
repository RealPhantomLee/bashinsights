"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsFine(true);

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let rafId: number;
    let expanded = false;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      const ring = ringRef.current;
      const dot = dotRef.current;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      if (dot) dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const setHover = (hovering: boolean) => {
      expanded = hovering;
      const ring = ringRef.current;
      if (!ring) return;
      ring.style.width = hovering ? "64px" : "40px";
      ring.style.height = hovering ? "64px" : "40px";
      ring.style.opacity = hovering ? "0.6" : "0.4";
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a, button, [data-magnetic]");
      if (target && !expanded) setHover(true);
      else if (!target && expanded) setHover(false);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!isFine) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 rounded-full border border-[var(--accent)] transition-[width,height,opacity] duration-200"
        style={{ width: 40, height: 40, opacity: 0.4, zIndex: 9998 }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 rounded-full bg-[var(--accent)]"
        style={{ width: 6, height: 6, zIndex: 9999 }}
      />
    </>
  );
}
