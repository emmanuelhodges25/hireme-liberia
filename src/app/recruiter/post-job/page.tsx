export default function PostJobPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        Post New Job
      </h1>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >
        <div className="grid gap-4">
          <input
            placeholder="Job Title"
            className="rounded-xl bg-black/30 p-4 text-white"
          />

          <input
            placeholder="Location"
            className="rounded-xl bg-black/30 p-4 text-white"
          />

          <select className="rounded-xl bg-black/30 p-4 text-white">
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>

          <textarea
            rows={8}
            placeholder="Job Description"
            className="rounded-xl bg-black/30 p-4 text-white"
          />

          <button
            className="
              rounded-xl
              bg-[#E60023]
              py-4
              text-white
            "
          >
            Publish Job
          </button>
        </div>
      </div>
    </div>
  );
}