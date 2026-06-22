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
            className="reveal font-display text-3xl font-bold leading-snug text-[var(--fg)] sm:text-4xl"
          >
            BASH Insights exists to help government agencies, public institutions, and community partners solve complex challenges through practical solutions, trusted collaboration, and mission-focused support.
          </h2>
          <p className="reveal max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg" data-delay="2">
            We&rsquo;re built to be a flexible, mission-first partner &mdash; not a single-service vendor. Whatever the challenge, our approach is the same: understand the goal, bring the right resources together, and deliver outcomes that brings results and serve the public good.
          </p>
        </div>
      </div>
    </section>
  );
}
