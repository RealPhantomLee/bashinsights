import { CONTACT_EMAIL, SITE_NAME, SITE_FULL_NAME } from "@/lib/site";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#solutions", label: "Capabilities" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-dark)]">
      <div className="accent-line-thick mx-auto max-w-6xl px-6 pt-12 pb-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-white">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-white/50">{SITE_FULL_NAME}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-sm border border-[var(--accent)] px-2.5 py-1 text-xs font-semibold text-[var(--accent)]">
                SAM.gov Registered
              </span>
              <span className="inline-flex items-center rounded-sm border border-[var(--accent)] px-2.5 py-1 text-xs font-semibold text-[var(--accent)]">
                NAICS 541611
              </span>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Navigate</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">Connect</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block text-sm text-white/60 transition-colors hover:text-[var(--accent)]"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm font-semibold text-[var(--accent)]">Now Accepting Partnerships</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          &copy; {year} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
