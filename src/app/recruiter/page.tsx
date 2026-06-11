import Link from "next/link";

export default function RecruiterDashboard() {
  const cards = [
    {
      title: "Post Job",
      href: "/recruiter/post-job",
    },
    {
      title: "Manage Jobs",
      href: "/recruiter/jobs",
    },
    {
      title: "Applicants",
      href: "/recruiter/applicants",
    },
    {
      title: "Company Profile",
      href: "/recruiter/company",
    },
    {
      title: "Analytics",
      href: "/recruiter/analytics",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Recruiter Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Manage jobs, applicants and company information.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition
              hover:bg-white/10
            "
          >
            <h3 className="text-xl font-semibold text-white">
              {card.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}