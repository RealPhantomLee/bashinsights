import { CONTACT_EMAIL } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--bg)]" aria-labelledby="contact-heading">
      <div className="accent-line-thick mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-28">
        <p className="reveal section-label">04 / Connect</p>
        <h2
          id="contact-heading"
          className="reveal font-display text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl"
          data-delay="1"
        >
          Let&rsquo;s talk about how BASH Insights can support your mission.
        </h2>
        <p className="reveal max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg" data-delay="2">
          Whether you&rsquo;re scoping a new project or exploring a new partnership, we would welcome the conversation. Reach out and we will follow up promptly.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="reveal btn-primary rounded-sm px-8 py-3 text-base font-semibold text-white"
          data-delay="3"
        >
          Email {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
