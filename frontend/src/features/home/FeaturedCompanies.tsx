const companies = [
  "Google Africa",
  "Andela",
  "Flutterwave",
  "MTN Liberia",
];

export default function FeaturedCompanies() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">
        Featured Companies
      </h2>

      <div className="grid gap-4 md:grid-cols-4">
        {companies.map((c) => (
          <div
            key={c}
            className="rounded-2xl bg-white p-6 text-center shadow-sm"
          >
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-200" />

            <h3 className="font-semibold">{c}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}