const differentiators = [
  {
    title: "Mission-First, Not Vertical-Locked",
    description:
      "We organize around the mission, not a single industry. That means we bring the right capability to the table &mdash; whatever the challenge calls for &mdash; instead of fitting every problem into one specialty.",
  },
  {
    title: "Built for Trusted Collaboration",
    description:
      "Government work runs on relationships and accountability. We show up as a true partner &mdash; transparent, responsive, and easy to work alongside.",
  },
  {
    title: "Adaptive by Design",
    description:
      "Agencies and missions evolve. Our team and approach are built to flex with changing requirements, scopes, and priorities without losing momentum.",
  },
  {
    title: "Outcomes That Hold Up",
    description:
      "We focus on results that withstand scrutiny &mdash; well-documented, compliant, and built to create lasting public impact, not just check a box.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy" aria-labelledby="why-us-heading">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="max-w-2xl">
          <h2
            id="why-us-heading"
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Why Common Sphere
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            We help public-sector organizations accomplish their missions &mdash; full
            stop. That focus shapes everything about how we work.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
