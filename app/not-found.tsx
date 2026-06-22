import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 bg-[var(--bg)] px-6 py-28 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        404
      </p>
      <h1 className="font-display max-w-xl text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="rounded-sm bg-[var(--accent)] px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-[var(--accent-dim)]"
      >
        Back to Home
      </Link>
    </section>
  );
}
