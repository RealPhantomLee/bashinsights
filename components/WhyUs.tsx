const differentiators = [
  {
    title: "Mission-First, Not Vertical-Locked",
    description:
      "We organize around the mission, not a single industry. That means we bring the right capability to the table — whatever the challenge calls for — instead of fitting every problem into one specialty.",
  },
  {
    title: "Built for Trusted Collaboration",
    description:
      "Government work runs on relationships and accountability. We show up as a true partner — transparent, responsive, and easy to work alongside.",
  },
  {
    title: "Adaptive by Design",
    description:
      "Agencies and missions evolve. Our team and approach are built to flex with changing requirements, scopes, and priorities without losing momentum.",
  },
  {
    title: "Outcomes That Hold Up",
    description:
      "We focus on results that withstand scrutiny — well-documented, compliant, and built to create lasting public impact, not just check a box.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[var(--surface-dark)]" aria-labelledby="why-us-heading">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mb-16 max-w-2xl">
          <p className="section-label">03 / Differentiators</p>
          <h2
            id="why-us-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Why BASH Insights
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            We help public-sector organizations accomplish their missions &mdash; full stop. That focus shapes everything about how we work.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="border-l-2 border-[var(--accent)] bg-white/5 p-6"
            >
              <h3 className="font-display text-lg font-bold text-white">
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
