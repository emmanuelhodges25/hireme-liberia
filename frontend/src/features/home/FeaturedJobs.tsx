const jobs = [
  {
    title: "",
    company: "",
    location: "",
    salary: "",
  },
  {
    title: "",
    company: "",
    location: "",
    salary: "",
  },
  {
    title: "",
    company: "",
    location: "",
    salary: "",
  },
];

export default function FeaturedJobs() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          Featured Jobs
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold">
              {job.title}
            </h3>

            <p className="mt-2 text-slate-500">
              {job.company}
            </p>

            <p className="mt-1">
              📍 {job.location}
            </p>

            <p className="mt-1 font-semibold text-[#E60023]">
              {job.salary}
            </p>

            <button className="mt-5 rounded-xl bg-[#002B7F] px-4 py-2 text-white">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}