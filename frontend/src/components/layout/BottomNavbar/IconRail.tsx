"use client";

import Link from "next/link";
import {
  Home,
  Briefcase,
  GraduationCap,
  Building2,
  Users,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

const items = [
  { icon: Home, href: "/" },
  { icon: Briefcase, href: "/jobs" },
  { icon: GraduationCap, href: "/scholarships" },
  { icon: Building2, href: "/companies" },
  { icon: Users, href: "/recruiters" },
  { icon: MessageSquare, href: "/messages" },
  { icon: Bell, href: "/notifications" },
  { icon: Settings, href: "/settings" },
];

export default function IconRail() {
  return (
    <div className="flex h-screen w-20 flex-col items-center border-r border-white/10 bg-[#030C20]/95 py-6 backdrop-blur-xl">
      <div className="mb-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E60023] font-bold text-white">
          H
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              className="flex h-12 w-12 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}