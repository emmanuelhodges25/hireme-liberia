const recruiters = [
  { name: "Tech Liberia", role: "Tech Hiring Partner" },
  { name: "Impact Africa", role: "NGO Recruiter" },
  { name: "Global Careers", role: "Remote Jobs" },
];

export default function FeaturedRecruiters() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">
        Featured Recruiters
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {recruiters.map((r) => (
          <div
            key={r.name}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="h-12 w-12 rounded-full bg-slate-200" />

            <h3 className="mt-4 font-semibold">
              {r.name}
            </h3>

            <p className="text-sm text-slate-500">
              {r.role}
            </p>

            <button className="mt-4 rounded-xl border px-4 py-2">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}