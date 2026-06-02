const scholarships = [
  "African Leadership Scholarship",
  "Tech Women Africa Grant",
  "Global Youth Scholarship",
];

export default function LatestScholarships() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">
        Latest Scholarships
      </h2>

      <div className="space-y-4">
        {scholarships.map((s) => (
          <div
            key={s}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold">{s}</h3>
            <p className="text-sm text-slate-500">
              Fully funded opportunity
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}