"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        Find Opportunities
      </h2>

      <div className="flex flex-col gap-4 lg:flex-row">
        <input
          type="text"
          placeholder="Job title, company, or keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#002B7F]"
        />

        <select className="rounded-xl border px-4 py-3">
          <option>All Categories</option>
          <option>Jobs</option>
          <option>Internships</option>
          <option>Scholarships</option>
          <option>Startups</option>
        </select>

        <button className="rounded-xl bg-[#002B7F] px-6 py-3 text-white">
          Search
        </button>
      </div>
    </div>
  );
}