interface OpportunityCardProps {
  title: string;
  organization: string;
  location: string;
  type: string;
}

export default function OpportunityCard({
  title,
  organization,
  location,
  type,
}: OpportunityCardProps) {
  return (
    <div className="rounded-3xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#002B7F]">
          {type}
        </span>
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        {organization}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        📍 {location}
      </p>

      <button className="mt-5 rounded-xl bg-[#002B7F] px-4 py-2 text-white">
        View Details
      </button>
    </div>
  );
}