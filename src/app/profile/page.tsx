export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
        "
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div
            className="
              flex
              h-28
              w-28
              items-center
              justify-center
              rounded-full
              bg-linear-to-r
              from-red-500
              to-red-700
              text-3xl
              font-bold
              text-white
            "
          >
            U
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              User Profile
            </h1>

            <p className="mt-2 text-slate-400">
              Your professional identity on HireMe Liberia.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="mb-4 text-xl font-semibold text-white">
            About
          </h2>

          <p className="text-slate-400">
            Profile information will load from backend.
          </p>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="mb-4 text-xl font-semibold text-white">
            Skills
          </h2>

          <p className="text-slate-400">
            Skills section coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}