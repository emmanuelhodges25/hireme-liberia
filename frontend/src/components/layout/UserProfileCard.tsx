export default function UserProfileCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-linear-to-r from-[#002B7F] to-[#E60023]" />

        <div>
          <h3 className="font-semibold text-white">
            Emmanuel Hodges
          </h3>

          <p className="text-xs text-slate-400">
            Junior Developer
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[#E60023]/20 p-2 text-center">
        <span className="text-xs text-red-200">
          Premium Member
        </span>
      </div>
    </div>
  );
}