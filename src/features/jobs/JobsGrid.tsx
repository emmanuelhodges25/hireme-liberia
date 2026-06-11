import Link from "next/link";

export default function JobsGrid() {
  return (
    <section>
      <div
        className="
          flex
          min-h-100
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-white/10
        "
      >
        <div className="text-center">
          <h3 className="text-xl text-white">
            No Jobs Available
          </h3>

          <p className="mt-2 text-slate-400">
            Jobs will appear here after backend integration.
          </p>

          <Link
            href="/recruiter"
            className="
              mt-4
              inline-block
              rounded-xl
              bg-[#E60023]
              px-5
              py-3
              text-white
            "
          >
            Post Job
          </Link>
        </div>
      </div>
    </section>
  );
}