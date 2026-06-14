export default function JobsHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-4xl
        border
        border-cyan-500/20
        bg-linear-to-br
        from-cyan-950/30
        via-slate-950
        to-purple-950/30
        p-8
        md:p-12
      "
    >
      <div
        className="
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <h1
        className="
          relative
          text-4xl
          font-black
          text-white
          md:text-6xl
        "
      >
        Discover Jobs Across Liberia
      </h1>

      <p
        className="
          relative
          mt-4
          max-w-2xl
          text-slate-300
        "
      >
        Explore verified opportunities,
        remote positions, graduate roles,
        internships and career growth
        opportunities.
      </p>
    </section>
  );
}