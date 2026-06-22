const differentiators = [
  {
    stat: "15+",
    label: "Years Public Sector Experience",
  },
  {
    stat: "200+",
    label: "Government Engagements Delivered",
  },
  {
    stat: "98%",
    label: "Client Retention Rate",
  },
  {
    stat: "12+",
    label: "Analysis & Evaluation Specialties",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0a0a14]" aria-labelledby="why-us-heading">
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
            We&rsquo;re built for public sector impact — combining deep analytics expertise with government contracting discipline.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div
              key={item.label}
              className="border-l-2 border-[#06B6D4] pl-6"
            >
              <p className="font-display text-4xl font-bold text-[#06B6D4] sm:text-5xl">
                {item.stat}
              </p>
              <p className="mt-2 text-sm font-medium text-white/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
