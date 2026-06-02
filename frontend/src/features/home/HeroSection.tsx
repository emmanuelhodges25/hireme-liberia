"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#002B7F] via-[#001d56] to-[#E60023] p-10 lg:p-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
          🇱🇷 Liberia&apos;s Opportunity Platform
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-7xl">
          Connecting Talent With
          <br />
          Life-Changing Opportunities
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          Find jobs, internships, scholarships,
          startups, learning opportunities,
          and professional growth resources
          built specifically for Liberia and beyond.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-[#002B7F]">
            Explore Jobs
          </button>

          <button className="rounded-xl border border-white px-6 py-3">
            Post Opportunity
          </button>
        </div>
      </motion.div>

      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
        <div className="h-full bg-[radial-gradient(circle_at_center,white,transparent)]" />
      </div>
    </section>
  );
}