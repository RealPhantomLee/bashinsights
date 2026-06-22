import { SITE_TAGLINE, SITE_FULL_NAME } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-clip-bottom relative overflow-hidden bg-[#0a0a14]"
      aria-label="Introduction"
    >
      {/* Geometric background ring */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 opacity-20"
        width="600"
        height="600"
        viewBox="0 0 600 600"
      >
        <circle cx="300" cy="300" r="280" fill="none" stroke="#06B6D4" strokeWidth="2" />
        <circle cx="300" cy="300" r="200" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.5" />
      </svg>

      {/* Animated gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(6,182,212,0.2), transparent 45%), radial-gradient(circle at 85% 60%, rgba(6,182,212,0.1), transparent 50%)",
          animation: "gradient-shift 15s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 sm:py-40 md:py-48">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
          {SITE_FULL_NAME}
        </p>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          {SITE_TAGLINE}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          We turn complex government data into clear decisions. Analytics, strategy, and mission focus—designed for the public sector.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="rounded-sm bg-[#06B6D4] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[#0891B2] hover:shadow-lg"
          >
            Partner With Us
          </a>
          <a
            href="#solutions"
            className="rounded-sm border-2 border-[#06B6D4] px-8 py-3 text-base font-semibold text-[#06B6D4] transition-all hover:bg-[#06B6D4]/10"
          >
            Explore Our Capabilities →
          </a>
        </div>
      </div>
    </section>
  );
}
