const startups = [
  "AgriTech Liberia",
  "FinTech Rise",
  "EduSmart Africa",
];

export default function StartupShowcase() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">
        Startup Showcase
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {startups.map((s) => (
          <div
            key={s}
            className="rounded-2xl bg-linear-to-r from-[#002B7F] to-[#E60023] p-6 text-white"
          >
            <h3 className="font-semibold">{s}</h3>
            <p className="text-sm opacity-80">
              Innovative African startup
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}