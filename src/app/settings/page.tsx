export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">
        Settings
      </h1>

      <div className="grid gap-6">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
          "
        >
          <h2 className="text-xl text-white">
            Account Settings
          </h2>
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
          <h2 className="text-xl text-white">
            Privacy Settings
          </h2>
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
          <h2 className="text-xl text-white">
            Notification Settings
          </h2>
        </div>
      </div>
    </div>
  );
}