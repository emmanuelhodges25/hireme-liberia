export default function UserProfileCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 rounded-full bg-linear-to-r from-[#002B7F] to-[#E60023]" />

        <div>
          <h3 className="font-semibold text-white">
            Emmanuel Hodges
          </h3>

          <p className="text-sm text-slate-400">
            Junior Developer
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[#E60023]/20 p-2 text-center">
        <span className="text-sm text-red-200">
          Premium Plan
        </span>
      </div>
    </div>
  );
}