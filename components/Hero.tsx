import { SITE_TAGLINE, SITE_FULL_NAME } from "@/lib/site";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-clip-bottom relative overflow-hidden bg-[var(--surface-dark)]"
      aria-label="Introduction"
    >
      {/* Live particle constellation background */}
      <ParticleCanvas />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 40%, rgba(6,182,212,0.08), transparent), radial-gradient(ellipse 40% 60% at 85% 70%, rgba(6,182,212,0.05), transparent)",
          zIndex: 1,
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 sm:py-40 md:py-48" style={{ zIndex: 2 }}>
        <p className="animate-hero-eyebrow text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {SITE_FULL_NAME}
        </p>
        <h1 className="animate-hero-h1 font-display max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          {SITE_TAGLINE}
        </h1>
        <p className="animate-hero-body max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          BASH Insights helps government organizations navigate challenges, modernize operations, and achieve mission success through collaborative solutions and trusted partnerships.
        </p>
        <div className="animate-hero-cta flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="btn-primary rounded-sm px-8 py-3 text-base font-semibold text-white"
          >
            Partner With Us
          </a>
          <a
            href="#solutions"
            className="rounded-sm border-2 border-[var(--accent)] px-8 py-3 text-base font-semibold text-[var(--accent)] transition-all hover:bg-[var(--accent)]/10"
          >
            Explore Our Capabilities →
          </a>
        </div>
      </div>
    </section>
  );
}
