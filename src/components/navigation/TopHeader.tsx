"use client";

import Link from "next/link";
import { Bell, Search, User } from "lucide-react";

export default function TopHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-slate-950/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          gap-4
          px-4
          py-4
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
            flex
            min-w-0
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-br
              from-red-500
              via-red-600
              to-blue-700
              text-lg
              font-bold
              text-white
              shadow-lg
            "
          >
            HM
          </div>

          <div className="min-w-0">
            <h1
              className="
                truncate
                text-lg
                font-bold
                text-white
                sm:text-xl
              "
            >
              HireMe Liberia
            </h1>

            <p
              className="
                truncate
                text-xs
                text-slate-400
                sm:text-sm
              "
            >
              Opportunities Platform
            </p>
          </div>
        </Link>

        {/* Search */}

        <div
          className="
            hidden
            md:flex
            flex-1
            max-w-xl
            items-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
          "
        >
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search jobs, internships, scholarships..."
            className="
              w-full
              bg-transparent
              text-white
              outline-none
              placeholder:text-slate-500
            "
          />
        </div>

        {/* Actions */}

        <div className="flex items-center gap-3">
          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <Bell size={20} />
          </button>

          <button
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              text-white
              transition
              hover:bg-white/10
            "
          >
            <User size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Search */}

      <div
        className="
          border-t
          border-white/10
          px-4
          pb-4
          md:hidden
        "
      >
        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
          "
        >
          <Search size={18} className="text-slate-400" />

          <input
            placeholder="Search opportunities..."
            className="
              w-full
              bg-transparent
              text-white
              outline-none
              placeholder:text-slate-500
            "
          />
        </div>
      </div>
    </header>
  );
}