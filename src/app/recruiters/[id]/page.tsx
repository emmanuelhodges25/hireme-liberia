interface Props {
  params: {
    id: string;
  };
}

export default function RecruiterDetailsPage({
  params,
}: Props) {
  return (
    <div className="space-y-6">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <h1 className="text-3xl font-bold text-white">
          Recruiter Details
        </h1>

        <p className="mt-3 text-slate-400">
          Recruiter ID: {params.id}
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-white/10
          p-12
        "
      >
        <p className="text-slate-400">
          Recruiter information will load from backend.
        </p>
      </div>
    </div>
  );
}