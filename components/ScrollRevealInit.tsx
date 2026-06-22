"use client";

import { useEffect } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/";

function runScramble(el: Element) {
  const original = el.textContent || "";
  let frame = 0;
  const totalFrames = 18;
  const interval = setInterval(() => {
    frame++;
    el.textContent = original
      .split("")
      .map((char, i) => {
        if (char === " ") return " ";
        if (frame / totalFrames > i / original.length) return char;
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      })
      .join("");
    if (frame >= totalFrames) {
      el.textContent = original;
      clearInterval(interval);
    }
  }, 30);
}

export default function ScrollRevealInit() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    const scrambleObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runScramble(entry.target);
            scrambleObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 }
    );

    const wordObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            wordObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
      document.querySelectorAll(".scramble").forEach((el) => scrambleObserver.observe(el));

      document.querySelectorAll(".word-split:not([data-split-done])").forEach((el) => {
        el.setAttribute("data-split-done", "true");
        const text = el.textContent || "";
        el.innerHTML = text
          .split(" ")
          .map(
            (word, i) =>
              `<span class="word"><span class="word-inner" style="transition-delay:${i * 0.06}s">${word}</span></span>`
          )
          .join(" ");
        el.querySelectorAll(".word-inner").forEach((w) => wordObserver.observe(w));
      });
    };

    observe();
    const t = setTimeout(observe, 200);

    return () => {
      revealObserver.disconnect();
      scrambleObserver.disconnect();
      wordObserver.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
