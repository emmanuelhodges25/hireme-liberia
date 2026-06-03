import AuthLayout from "@/features/auth/components/AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email"
    >
      <div className="rounded-3xl border bg-white p-6">
        <input
          placeholder="Email Address"
          className="w-full rounded-xl border p-3"
        />

        <button className="mt-4 w-full rounded-xl bg-[#002B7F] p-3 text-white">
          Send Reset Link
        </button>
      </div>
    </AuthLayout>
  );
}