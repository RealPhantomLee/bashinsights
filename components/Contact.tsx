import { CONTACT_EMAIL } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-sand" aria-labelledby="contact-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-28">
        <h2
          id="contact-heading"
          className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
        >
          Let&rsquo;s talk about how Common Sphere can support your mission.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
          Whether you&rsquo;re scoping an upcoming requirement or exploring a new
          partnership, we&rsquo;d welcome the conversation. Reach out and we&rsquo;ll
          follow up promptly.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-full bg-navy px-7 py-3 text-base font-medium text-white transition-colors hover:bg-navy-deep"
        >
          Email {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
