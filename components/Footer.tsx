import { CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-navy">{SITE_NAME}</p>
          <p className="mt-1 text-sm text-foreground/60">{SITE_TAGLINE}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-foreground/60 sm:items-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-teal">
            {CONTACT_EMAIL}
          </a>
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
