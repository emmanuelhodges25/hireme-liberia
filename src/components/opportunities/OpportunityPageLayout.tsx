import Link from "next/link";

interface OpportunityPageLayoutProps {
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
}

export default function OpportunityPageLayout({
  title,
  description,
  emptyTitle,
  emptyDescription,
}: OpportunityPageLayoutProps) {
  return (
    <div className="space-y-8">
      {/* Page Header */}

      <div>
        <h1 className="text-4xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-3 text-slate-400">
          {description}
        </p>
      </div>

      {/* Search & Filters */}

      <div
        className="
          grid
          gap-4
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          md:grid-cols-4
        "
      >
        <input
          placeholder="Search..."
          className="
            rounded-xl
            bg-black/30
            p-3
            text-white
            outline-none
          "
        />

        <input
          placeholder="Location"
          className="
            rounded-xl
            bg-black/30
            p-3
            text-white
            outline-none
          "
        />

        <select
          className="
            rounded-xl
            bg-black/30
            p-3
            text-white
          "
        >
          <option>All Categories</option>
        </select>

        <button
          className="
            rounded-xl
            bg-red-600
            p-3
            font-medium
            text-white
          "
        >
          Search
        </button>
      </div>

      {/* Listings Area */}

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
        <h2 className="text-2xl font-bold text-white">
          {emptyTitle}
        </h2>

        <p className="mt-4 text-slate-400">
          {emptyDescription}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className="
              rounded-xl
              bg-red-600
              px-6
              py-3
              text-white
            "
          >
            Join HireMe Liberia
          </Link>

          <Link
            href="/recruiter"
            className="
              rounded-xl
              border
              border-white/10
              px-6
              py-3
              text-white
            "
          >
            Become a Recruiter
          </Link>
        </div>
      </div>
    </div>
  );
}