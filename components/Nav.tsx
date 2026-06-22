"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#solutions", label: "Solutions" },
  { href: "#why-us", label: "Why BASH Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved as "dark" | "light");
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-current/10 bg-[var(--bg)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight text-[var(--fg)]">
            BASH Insights
          </a>
          <p className="text-xs text-[var(--fg-muted)]">Business Analytics & Strategic Hub</p>
        </div>
        <ul className="hidden items-center gap-8 text-sm font-medium text-[var(--fg)]/80 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="border-b-2 border-transparent transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-dim)] sm:inline-block"
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
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 0l4.24-4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m6.08 0l4.24 4.24" />
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
              className="mt-1 block rounded-full bg-[var(--accent)] px-4 py-2 text-center font-medium text-white transition-colors hover:bg-[var(--accent-dim)]"
            >
              Partner With Us
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
