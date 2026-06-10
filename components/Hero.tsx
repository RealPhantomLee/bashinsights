import { SITE_TAGLINE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy"
      aria-label="Introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(58,142,130,0.35), transparent 45%), radial-gradient(circle at 85% 60%, rgba(255,255,255,0.12), transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-28 sm:py-36">
        <p className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium tracking-wide text-white/80">
          {SITE_TAGLINE}
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Building Better Public Outcomes.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Common Sphere helps government organizations navigate challenges, modernize
          operations, and achieve mission success through collaborative solutions and
          trusted partnerships.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-full bg-teal px-7 py-3 text-base font-medium text-white transition-colors hover:bg-teal/90"
          >
            Partner With Us
          </a>
          <a
            href="#solutions"
            className="rounded-full border border-white/30 px-7 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Explore Our Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
