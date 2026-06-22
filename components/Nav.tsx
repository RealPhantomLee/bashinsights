"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#solutions", label: "Solutions" },
  { href: "#why-us", label: "Why BASH Insights" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["mission", "solutions", "why-us", "contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved as "dark" | "light");
    document.documentElement.dataset.theme = saved;

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { threshold: 0.4 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    window.dispatchEvent(
      new CustomEvent("theme-transition", {
        detail: { direction: newTheme === "light" ? "to-light" : "to-dark" },
      })
    );
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.dataset.theme = newTheme;
    }, 350);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--border)] backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""}`}
      style={{ backgroundColor: "var(--bg-nav)" }}
    >
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-[var(--fg)]">
            BASH Insights
          </a>
          <p className="text-xs text-[var(--fg-muted)]">Business Analytics &amp; Strategic Hub</p>
        </div>
        <ul className="hidden items-center gap-8 text-sm font-medium text-[var(--fg)]/80 sm:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`border-b-2 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${
                    isActive ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-sm bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-dim)] sm:inline-block"
          >
            Partner With Us
          </a>
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] p-2 text-[var(--fg)] transition-colors hover:bg-[var(--bg-secondary)]"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] p-2 text-[var(--fg)] sm:hidden"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-5 w-5"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 text-sm font-medium text-[var(--fg)]/80 sm:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-2 py-2 transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 block rounded-sm bg-[var(--accent)] px-4 py-2 text-center font-semibold text-white transition-colors hover:bg-[var(--accent-dim)]"
            >
              Partner With Us
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
