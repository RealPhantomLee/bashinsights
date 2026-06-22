import { CONTACT_EMAIL, SITE_NAME, SITE_FULL_NAME } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[#0a0a14]">
      <div className="accent-line-thick mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-white/60">{SITE_FULL_NAME}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/60 sm:items-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-[#06B6D4]">
            {CONTACT_EMAIL}
          </a>
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
