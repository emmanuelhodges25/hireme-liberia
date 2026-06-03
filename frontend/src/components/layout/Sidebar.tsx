"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../branding/Logo";
import UserProfileCard from "./UserProfileCard";

import { sidebarItems } from "@/config/sidebar";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col border-r border-white/10 bg-[#06173A]">
      <div className="p-6">
        <Logo />
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {sidebarItems.map((section) => (
          <div
            key={section.section}
            className="mb-8"
          >
            <h4 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {section.section}
            </h4>

            <div className="space-y-2">
              {section.items.map((item) => {
                const Icon =
                  item.icon;

                const active =
                  pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all
                    ${
                      active
                        ? "bg-[#E60023] text-white shadow-lg"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon
                      size={18}
                    />

                    <span>
                      {item.label}
                    </span>

                    {item.label ===
                      "Notifications" && (
                      <span className="ml-auto rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                        3
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <UserProfileCard />
      </div>
    </aside>
  );
}