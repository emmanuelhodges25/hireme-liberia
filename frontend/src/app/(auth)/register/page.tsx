"use client";

import { useState } from "react";

import AuthLayout from "@/features/auth/components/AuthLayout";
import RoleSelector from "@/features/auth/components/RoleSelector";
import PasswordStrength from "@/features/auth/components/PasswordStrength";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  const [role, setRole] =
    useState("USER");

  const [password, setPassword] =
    useState("");

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join HireMe Liberia"
    >
      <div className="rounded-3xl border bg-white p-6">
        {step === 1 && (
          <>
            <h3 className="mb-4 font-semibold">
              Choose Account Type
            </h3>

            <RoleSelector
              value={role}
              onChange={setRole}
            />

            <button
              onClick={() =>
                setStep(2)
              }
              className="mt-6 w-full rounded-xl bg-[#002B7F] p-3 text-white"
            >
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="space-y-4">
              <input
                placeholder="Full Name"
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder="Email"
                className="w-full rounded-xl border p-3"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border p-3"
              />

              <PasswordStrength
                password={password}
              />
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-[#E60023] p-3 text-white"
            >
              Create Account
            </button>
          </>
        )}
      </div>
    </AuthLayout>
  );
}