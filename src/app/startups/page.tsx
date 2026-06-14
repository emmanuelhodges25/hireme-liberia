import Link from "next/link";

export default function StartupsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Startups
        </h1>

        <p className="mt-2 text-slate-400">
          Discover startup opportunities across Liberia.
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
          No Startups Available Yet
        </h2>

        <p className="mt-3 text-slate-400">
          Startup listings will appear here once they join HireMe Liberia.
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