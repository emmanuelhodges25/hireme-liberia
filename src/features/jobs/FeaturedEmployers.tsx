export default function FeaturedEmployers() {
  return (
    <section>
      <h2
        className="
          mb-4
          text-2xl
          font-bold
          text-white
        "
      >
        Featured Employers
      </h2>

      <div
        className="
          grid
          gap-4
          md:grid-cols-3
        "
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-white/5
              p-6
            "
          >
            <h3
              className="
                text-lg
                font-semibold
                text-white
              "
            >
              Employer Profile
            </h3>

            <p className="mt-2 text-slate-400">
              Employer information will
              appear here when backend
              integration is complete.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}