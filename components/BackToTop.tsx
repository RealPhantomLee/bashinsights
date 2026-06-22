"use client";

import { useEffect, useRef } from "react";

export default function BackToTop() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      btnRef.current?.classList.toggle("visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="back-to-top fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--accent)] text-white shadow-lg transition-colors hover:bg-[var(--accent-dim)]"
    >
      ↑
    </button>
  );
}
