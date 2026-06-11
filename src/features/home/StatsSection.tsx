"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Active Jobs",
    value: "2,500+",
  },
  {
    title: "Recruiters",
    value: "500+",
  },
  {
    title: "Scholarships",
    value: "300+",
  },
  {
    title: "Students",
    value: "15,000+",
  },
];

export default function StatsSection() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 }}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <h3 className="text-3xl font-bold text-[#002B7F]">
            {stat.value}
          </h3>

          <p className="mt-2 text-slate-500">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </section>
  );
}