const categories = [
  "Technology",
  "Banking",
  "NGOs",
  "Healthcare",
  "Education",
  "Engineering",
  "Remote",
  "Government",
];

export default function TrendingCategories() {
  return (
    <section>
      <h2
        className="
          mb-4
          text-2xl
          font-bold
          text-white
        "
      >
        Trending Categories
      </h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/5
              px-5
              py-2
              text-sm
              text-cyan-300
              transition
              hover:bg-cyan-500/10
            "
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}