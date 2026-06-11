import Link from "next/link";

const categories = [
  {
    title: "Jobs",
    href: "/jobs",
  },
  {
    title: "Internships",
    href: "/internships",
  },
  {
    title: "Scholarships",
    href: "/scholarships",
  },
  {
    title: "Programs",
    href: "/programs",
  },
  {
    title: "Companies",
    href: "/companies",
  },
  {
    title: "Startups",
    href: "/startups",
  },
];

export default function QuickCategories() {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold text-white">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {categories.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
              text-white
              transition
              hover:bg-white/10
            "
          >
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}