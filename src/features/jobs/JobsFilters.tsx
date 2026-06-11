export default function JobsFilters() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
      "
    >
      <div className="grid gap-4 md:grid-cols-4">
        <input
          placeholder="Job title"
          className="
            rounded-xl
            bg-black/30
            px-4
            py-3
            text-white
            outline-none
          "
        />

        <input
          placeholder="Location"
          className="
            rounded-xl
            bg-black/30
            px-4
            py-3
            text-white
            outline-none
          "
        />

        <select
          className="
            rounded-xl
            bg-black/30
            px-4
            py-3
            text-white
          "
        >
          <option>All Categories</option>
        </select>

        <button
          className="
            rounded-xl
            bg-[#E60023]
            px-6
            py-3
            text-white
          "
        >
          Search
        </button>
      </div>
    </div>
  );
}