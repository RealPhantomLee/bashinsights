"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };

    observe();

    // Re-run after short delay so dynamically rendered client components are caught
    const t = setTimeout(observe, 200);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
