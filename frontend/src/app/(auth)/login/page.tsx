"use client";

import SocialLogin from "@/features/auth/components/SocialLogin";
import AuthLayout from "@/features/auth/components/AuthLayout";
import { Link } from "lucide-react";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue"
    >
      <div className="rounded-3xl border bg-white/80 p-6 backdrop-blur">
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-3"
          />

          <div className="flex justify-between text-sm">
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-[#002B7F]"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full rounded-xl bg-[#002B7F] p-3 text-white">
            Sign In
          </button>
        </form>

        <div className="my-6 text-center text-sm text-slate-400">
          OR
        </div>

        <SocialLogin />
      </div>
    </AuthLayout>
  );
}