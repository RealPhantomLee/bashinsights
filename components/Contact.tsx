import { CONTACT_EMAIL } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--bg)]" aria-labelledby="contact-heading">
      <div className="accent-line-thick mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-28">
        <p className="section-label">04 / Connect</p>
        <h2
          id="contact-heading"
          className="font-display text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl"
        >
          Let&rsquo;s talk about how BASH Insights can support your mission.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
          Whether you&rsquo;re scoping an upcoming requirement or exploring a new partnership, we&rsquo;d welcome the conversation. Reach out and we&rsquo;ll follow up promptly.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-sm bg-[var(--accent)] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[var(--accent-dim)] hover:shadow-lg"
        >
          Email {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
