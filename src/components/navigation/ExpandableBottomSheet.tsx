"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Briefcase,
  GraduationCap,
  Building2,
  Users,
  User,
  Bell,
  MessageSquare,
  Settings,
  FileText,
  PenSquare,
  Rocket,
  Award,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Jobs", href: "/jobs", icon: Briefcase },
  { label: "Internships", href: "/internships", icon: GraduationCap },
  { label: "Scholarships", href: "/scholarships", icon: Award },
  { label: "Programs", href: "/programs", icon: Rocket },
  { label: "Companies", href: "/companies", icon: Building2 },
  { label: "Startups", href: "/startups", icon: Rocket },
  { label: "Recruiters", href: "/recruiters", icon: Users },
  { label: "CV Builder", href: "/cv-builder", icon: FileText },
  { label: "Letter Builder", href: "/letter-builder", icon: PenSquare },
  { label: "Messages", href: "/messages", icon: MessageSquare },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function ExpandableBottomSheet({ open, onClose }: Props) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed inset-0 z-50
              bg-black/70 backdrop-blur-md
              will-change-opacity
            "
          />

          {/* SHEET */}
          <motion.div
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "110%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.8,
            }}
            className="
              fixed bottom-0 left-0 right-0 z-50
              h-[88vh]
              overflow-y-auto
              rounded-t-[38px]
              border-t border-white/10
              bg-slate-950
              px-5 pb-10 pt-4
              will-change-transform
              transform-gpu
            "
          >
            {/* HANDLE */}
            <div className="mb-6 flex justify-center">
              <div className="h-1.5 w-20 rounded-full bg-white/20" />
            </div>

            {/* HEADER */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Career Liberia
                </h2>
                <p className="text-xs text-slate-400">
                  Opportunities at your fingertips
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  rounded-xl border border-white/10
                  bg-white/5 p-3
                  active:scale-95 transition
                "
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* HERO BLOCK */}
            <div
              className="
                mt-6 rounded-3xl border border-white/10
                bg-linear-to-r from-red-600/20 to-blue-600/20
                p-4
              "
            >
              <h3 className="font-semibold text-white">
                Welcome Back
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Explore jobs, internships, scholarships, and career tools.
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="mt-6 flex gap-3">
              <Link
                href="/login"
                onClick={onClose}
                className="
                  flex-1 rounded-xl border border-white/10
                  py-3 text-center text-sm text-white
                  active:scale-95 transition
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={onClose}
                className="
                  flex-1 rounded-xl bg-red-600
                  py-3 text-center text-sm text-white
                  active:scale-95 transition
                "
              >
                Register
              </Link>
            </div>

            {/* MENU */}
            <div className="mt-8">
              <h3 className="mb-4 text-xs uppercase tracking-wider text-slate-400">
                Explore
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {menuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="
                        rounded-2xl border border-white/10
                        bg-white/5 p-4
                        active:scale-95
                        transition
                        hover:bg-white/10
                      "
                    >
                      <Icon
                        size={20}
                        className="mb-3 text-red-500"
                      />
                      <span className="text-sm text-white">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 rounded-3xl bg-white/5 p-4 text-center">
              <p className="text-xs text-slate-400">
                Career Liberia © 2026
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}