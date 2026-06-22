const capabilities = [
  {
    title: "Administrative & Operations Support",
    description:
      "Day-to-day operational backbone — from program coordination to office and records management — that keeps missions moving.",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Planning and coordination that gets people, materials, and resources where they need to be, on time and on budget.",
  },
  {
    title: "Compliance & Risk Management",
    description:
      "Practical frameworks that help organizations meet regulatory requirements and reduce risk without slowing the mission down.",
  },
  {
    title: "Training & Workforce Development",
    description:
      "Programs that build capability and readiness across teams, from onboarding to advanced skills development.",
  },
  {
    title: "Project & Program Management",
    description:
      "Disciplined planning and execution that keeps initiatives on track, on scope, and aligned with strategic goals.",
  },
  {
    title: "Research & Analysis",
    description:
      "Clear, evidence-based insight that helps decision-makers understand challenges and choose the right path forward.",
  },
  {
    title: "Technology & Modernization",
    description:
      "Practical support for modernizing systems and processes — helping organizations adapt without disrupting what already works.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-[var(--bg-secondary)]" aria-labelledby="solutions-heading">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="max-w-2xl">
          <p className="section-label">02 / Capabilities</p>
          <h2
            id="solutions-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl"
          >
            Capabilities Across the Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            We&rsquo;re not built around a single specialty. BASH Insights brings together capability areas that government organizations rely on every day &mdash; so we can support the mission wherever it needs us.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-sm border border-[var(--border)] border-t-2 border-t-transparent bg-[var(--surface)] p-6 transition-all hover:border-t-[var(--accent)] hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-bold text-[var(--fg)]">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
