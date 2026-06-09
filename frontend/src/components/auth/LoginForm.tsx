"use client";

export default function LoginForm() {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <h2 className="text-3xl font-bold text-white">
        Welcome Back
      </h2>

      <p className="mt-2 text-slate-400">
        Sign in to your account.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
  <button
    type="button"
    className="
      rounded-xl
      border
      border-white/10
      py-3
      text-white
    "
  >
    Google
  </button>

  <button
    type="button"
    className="
      rounded-xl
      border
      border-white/10
      py-3
      text-white
    "
  >
    GitHub
  </button>
</div>

      <form className="mt-8 space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
        />

        <button
          className="
            w-full
            rounded-xl
            bg-[#E60023]
            py-3
            font-medium
            text-white
          "
        >
          Sign In
        </button>

        <div className="mt-6 text-center text-sm text-slate-400">
  Don&apos;t have an account?{" "}
  <a
    href="/register"
    className="text-red-400 hover:text-red-300"
  >
    Create Account
  </a>
</div>
      </form>
    </div>
  );
}