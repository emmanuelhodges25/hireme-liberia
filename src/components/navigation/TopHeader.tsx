"use client";

import Link from "next/link";
import { Search, Bell } from "lucide-react";

export default function TopHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        border-white/10
        bg-black/30
        backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
         <Link href="/">
  <div>
    <h1
      className="
        text-3xl
        font-extrabold
        tracking-tight
      "
    >
      <span className="text-white">
        HireMe
      </span>{" "}
      <span
        className="
          bg-linear-to-r
          from-red-500
          via-red-400
          to-red-600
          bg-clip-text
          text-transparent
        "
      >
        Liberia
      </span>
    </h1>

    <p
      className="
        text-xs
        tracking-widest
        uppercase
        text-slate-400
      "
    >
      Opportunities • Careers • Growth
    </p>
  </div>
</Link>

          <button
            className="
              rounded-xl
              bg-white/5
              p-3
              text-white
            "
          >
            <Bell size={20} />
          </button>
        </div>

        <div className="mt-4">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
            "
          >
            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              placeholder="Search jobs, internships, scholarships..."
              className="
                flex-1
                bg-transparent
                text-white
                outline-none
              "
            />
          </div>
        </div>
      </div>
    </header>
  );
}