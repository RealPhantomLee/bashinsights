export default function Mission() {
  return (
    <section id="mission" className="bg-background" aria-labelledby="mission-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-28 md:grid-cols-[1fr_2fr] md:gap-16">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Our Mission
        </p>
        <div className="flex flex-col gap-6">
          <h2
            id="mission-heading"
            className="font-display text-2xl font-medium leading-snug text-navy sm:text-3xl"
          >
            Common Sphere exists to help government agencies, public institutions, and
            community partners solve complex challenges through practical solutions,
            trusted collaboration, and mission-focused support.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            We&rsquo;re built to be a flexible, mission-first partner &mdash; not a
            single-service vendor. Whatever the challenge, our approach is the same:
            understand the mission, bring the right resources together, and deliver
            outcomes that hold up to scrutiny and serve the public good.
          </p>
        </div>
      </div>
    </section>
  );
}
