"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";

export default function MainSidebar() {
  const pathname = usePathname();

  return (
    <div
      className="
        h-full
        w-72
        border-r
        border-white/10
        bg-black/20
        backdrop-blur-xl
      "
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">
          HireMe Liberia
        </h1>

        <p className="text-slate-400">
          Opportunity Platform
        </p>
      </div>

      <nav className="space-y-2 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition
                ${
                  active
                    ? "bg-[#E60023] text-white"
                    : "text-slate-300 hover:bg-white/10"
                }
              `}
            >
              <Icon size={18} />

              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}