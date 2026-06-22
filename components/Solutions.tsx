const capabilities = [
  {
    title: "Data Analytics & Insights",
    description:
      "Rigorous analysis of government data that reveals patterns, forecasts outcomes, and informs strategic decisions.",
  },
  {
    title: "Performance Metrics & Dashboards",
    description:
      "Real-time visibility into mission-critical KPIs and performance indicators — designed for rapid decision-making.",
  },
  {
    title: "Research & Strategic Analysis",
    description:
      "Evidence-based research and competitive intelligence that helps agencies understand their landscape and opportunities.",
  },
  {
    title: "Program Evaluation",
    description:
      "Rigorous assessment of program effectiveness, ROI, and impact — backed by data and tailored to public sector outcomes.",
  },
  {
    title: "Policy Analysis & Modeling",
    description:
      "Scenario modeling and policy impact analysis to evaluate options before implementation at scale.",
  },
  {
    title: "Workforce & Operations Analytics",
    description:
      "Data-driven insights into staffing, resource allocation, and process efficiency across your organization.",
  },
  {
    title: "Risk & Compliance Analytics",
    description:
      "Predictive analytics and compliance monitoring that reduce risk and support regulatory adherence.",
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
            Analytics & Insight Across Your Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
            From data discovery to strategic insight, we bring analytics discipline to every challenge. Our capabilities span analytics, evaluation, and strategic support.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-sm border-t-2 border-t-transparent bg-[var(--surface)] p-6 transition-all hover:border-t-[var(--accent)] hover:shadow-lg"
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
