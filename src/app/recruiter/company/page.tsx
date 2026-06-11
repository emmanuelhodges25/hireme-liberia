export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">
        Company Profile
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
        <input
          placeholder="Company Name"
          className="w-full rounded-xl bg-black/30 p-4 text-white"
        />
      </div>
    </div>
  );
}