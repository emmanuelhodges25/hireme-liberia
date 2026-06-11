const opportunities = [
  "International Scholarships",
  "Student Leadership Programs",
  "Remote Internships",
  "Startup Incubators",
];

export default function FeaturedOpportunities() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Opportunities
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {opportunities.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}