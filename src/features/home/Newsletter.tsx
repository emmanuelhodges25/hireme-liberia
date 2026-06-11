export default function Newsletter() {
  return (
    <section className="rounded-3xl bg-white p-10 text-center shadow-sm">
      <h2 className="text-3xl font-bold">
        Stay Updated
      </h2>

      <p className="mt-2 text-slate-500">
        Get latest jobs, scholarships, and opportunities.
      </p>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:justify-center">
        <input
          placeholder="Enter your email"
          className="rounded-xl border px-4 py-3"
        />

        <button className="rounded-xl bg-[#002B7F] px-6 py-3 text-white">
          Subscribe
        </button>
      </div>
    </section>
  );
}