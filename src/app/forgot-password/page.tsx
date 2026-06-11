export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="text-3xl font-bold text-white">
          Forgot Password
        </h1>

        <p className="mt-2 text-slate-400">
          Enter your email address to
          receive a reset link.
        </p>

        <input
          type="email"
          placeholder="Email"
          className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
        />

        <button className="mt-4 w-full rounded-xl bg-[#E60023] py-3 text-white">
          Send Reset Link
        </button>
      </div>
    </div>
  );
}