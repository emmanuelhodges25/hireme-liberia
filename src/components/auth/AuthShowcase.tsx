export default function AuthShowcase() {
  return (
    <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-16">
      <h1 className="text-6xl font-bold text-white">
        HireMe Liberia
      </h1>

      <p className="mt-6 max-w-lg text-xl text-slate-300">
        Connecting talented Liberians
        with jobs, scholarships,
        internships and career growth.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4">
        <StatCard title="Jobs" value="0+" />
        <StatCard title="Companies" value="0+" />
        <StatCard title="Recruiters" value="0+" />
        <StatCard title="Scholarships" value="0+" />
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="text-slate-400">
        {title}
      </p>
    </div>
  );
}