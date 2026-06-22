const items = [
  "Administrative & Operations Support",
  "Logistics & Supply Chain",
  "Compliance & Risk Management",
  "Training & Workforce Development",
  "Project & Program Management",
  "Research & Analysis",
  "Technology & Modernization",
];

export default function MarqueeStrip() {
  return (
    <div aria-hidden="true" className="overflow-hidden bg-[var(--accent)] py-3">
      <div style={{ animation: "marquee 28s linear infinite", display: "flex", whiteSpace: "nowrap" }}>
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-xs font-semibold uppercase tracking-widest text-white"
          >
            {label}
            <span className="text-white/40">&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
