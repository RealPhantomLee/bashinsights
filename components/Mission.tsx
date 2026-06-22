export default function Mission() {
  return (
    <section id="mission" className="section-clip-top bg-[var(--bg)]" aria-labelledby="mission-heading">
      <div className="accent-line mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-28 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="flex flex-col gap-2">
          <p className="section-label">01 / Mission</p>
        </div>
        <div className="flex flex-col gap-6">
          <h2
            id="mission-heading"
            className="font-display text-3xl font-bold leading-snug text-[var(--fg)] sm:text-4xl"
          >
            BASH Insights exists to turn complex government data into clear decisions that drive mission success.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            We&rsquo;re built as a flexible, analytics-first partner. Whatever the challenge, our approach is the same:
            understand the mission, apply rigorous analysis, and deliver outcomes that withstand scrutiny and serve the public good.
          </p>
        </div>
      </div>
    </section>
  );
}
