"use client";

import { useState } from "react";

export default function CVBuilderPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
        "
      >
        <h1 className="mb-6 text-3xl font-bold text-white">
          CV Builder
        </h1>

        <div className="space-y-4">
          <input
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
            placeholder="Full Name"
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Email"
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            placeholder="Phone Number"
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <textarea
            rows={5}
            value={summary}
            onChange={(e) =>
              setSummary(e.target.value)
            }
            placeholder="Professional Summary"
            className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              text-white
            "
          />

          <button
            className="
              w-full
              rounded-xl
              bg-red-600
              py-4
              font-medium
              text-white
            "
          >
            Save CV
          </button>
        </div>
      </div>

      {/* Preview */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white
          p-8
          text-black
        "
      >
        <h2 className="text-3xl font-bold">
          {fullName || "Your Name"}
        </h2>

        <p className="mt-2">
          {email || "email@example.com"}
        </p>

        <p>{phone || "+231..."}</p>

        <div className="mt-8">
          <h3 className="mb-2 text-xl font-semibold">
            Professional Summary
          </h3>

          <p>
            {summary ||
              "Your professional summary will appear here."}
          </p>
        </div>
      </div>
    </div>
  );
}