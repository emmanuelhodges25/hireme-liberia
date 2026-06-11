"use client";

import { useState } from "react";

import {
  Eye,
  EyeOff,
} from "lucide-react";

import PasswordStrength from "./PasswordStrength";

import Link from "next/link";



export default function RegisterForm() {
 const [showPassword, setShowPassword] =
  useState(false);

const [password, setPassword] =
  useState(""); 
  return (
    <div
      className="
        w-full
        max-w-lg
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <h2 className="text-3xl font-bold text-white">
        Create Account
      </h2>

      <p className="mt-2 text-slate-400">
        Join HireMe Liberia and unlock opportunities.
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
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              placeholder:text-slate-500
              focus:border-[#E60023]
              focus:outline-none
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              placeholder:text-slate-500
              focus:border-[#E60023]
              focus:outline-none
            "
          />
        </div>

        {/* User Role */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Account Type
          </label>

          <select
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-[#0F172A]
              px-4
              py-3
              text-white
              focus:border-[#E60023]
              focus:outline-none
            "
          >
            <option>User</option>
            <option>Recruiter</option>
          </select>
        </div>

        {/* Password */}
        <div>
  <label className="mb-2 block text-sm text-slate-300">
    Password
  </label>

  <div className="relative">
    <input
      type={
        showPassword
          ? "text"
          : "password"
      }
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
        text-white
      "
    />

    <button
      type="button"
      onClick={() =>
        setShowPassword(
          !showPassword
        )
      }
      className="
        absolute
        right-4
        top-3
        text-slate-400
      "
    >
      {showPassword ? (
        <EyeOff size={18} />
      ) : (
        <Eye size={18} />
      )}
    </button>
  </div>

  <PasswordStrength
    password={password}
  />
</div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              text-white
              placeholder:text-slate-500
              focus:border-[#E60023]
              focus:outline-none
            "
          />
        </div>

        {/* Terms */}
        <label className="flex items-center gap-3 text-sm text-slate-300">
          <input type="checkbox" />
          I agree to the Terms and Privacy Policy
        </label>

        {/* Register Button */}
        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-[#E60023]
            py-3
            font-medium
            text-white
            transition
            hover:opacity-90
          "
        >
          Create Account
        </button>

        {/* Login Link */}
        <div className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-red-400 hover:text-red-300"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}