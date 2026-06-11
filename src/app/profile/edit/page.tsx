export default function EditProfilePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        Edit Profile
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
            placeholder="Full Name"
            className="
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <input
            placeholder="Email"
            className="
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <input
            placeholder="Location"
            className="
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <textarea
            rows={5}
            placeholder="Professional Summary"
            className="
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <button
            className="
              rounded-xl
              bg-[#E60023]
              py-4
              text-white
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}