import Link from "next/link";

export default function InternshipsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Internships
        </h1>

        <p className="mt-2 text-slate-400">
          Discover internship opportunities across Liberia.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-12
          text-center
        "
      >
        <h2 className="text-2xl font-semibold text-white">
          No Internships Available Yet
        </h2>

        <p className="mt-3 text-slate-400">
          Internship listings will appear here once recruiters publish opportunities.
        </p>

        <Link
          href="/register"
          className="
            mt-6
            inline-block
            rounded-xl
            bg-red-600
            px-6
            py-3
            text-white
          "
        >
          Join HireMe Liberia
        </Link>
      </div>
    </div>
  );
}