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
  {
    label: "Jobs",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    label: "Internships",
    href: "/internships",
    icon: GraduationCap,
  },
  {
    label: "Scholarships",
    href: "/scholarships",
    icon: Award,
  },
  {
    label: "Programs",
    href: "/programs",
    icon: Rocket,
  },
  {
    label: "Companies",
    href: "/companies",
    icon: Building2,
  },
  {
    label: "Startups",
    href: "/startups",
    icon: Rocket,
  },
  {
    label: "Recruiters",
    href: "/recruiters",
    icon: Users,
  },
  {
    label: "CV Builder",
    href: "/cv-builder",
    icon: FileText,
  },
  {
    label: "Letter Builder",
    href: "/letter-builder",
    icon: PenSquare,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function ExpandableBottomSheet({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-50
              bg-black/70
              backdrop-blur-md
            "
          />

          {/* Sheet */}

          <motion.div
            drag="y"
            dragConstraints={{
              top: 0,
              bottom: 500,
            }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120) {
                onClose();
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="
              fixed
              bottom-0
              left-0
              right-0
              z-50
              h-[92vh]
              overflow-y-auto
              rounded-t-[40px]
              border-t
              border-white/10
              bg-slate-950
              px-6
              pb-10
              pt-4
            "
          >
            {/* Handle */}

            <div className="mb-6 flex justify-center">
              <div
                className="
                  h-1.5
                  w-24
                  rounded-full
                  bg-white/20
                "
              />
            </div>

            {/* Header */}

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Career Liberia
                </h2>

                <p className="text-sm text-slate-400">
                  Career & Opportunities Platform
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-3
                  transition
                  hover:bg-white/10
                "
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* User Welcome */}

            <div
              className="
                mt-6
                rounded-3xl
                border
                border-white/10
                bg-linear-to-r
                from-red-600/20
                to-blue-600/20
                p-5
              "
            >
              <h3 className="font-semibold text-white">
                Welcome to HireMe Liberia
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                Discover jobs, internships, scholarships,
                startups, programs, and career opportunities.
              </p>
            </div>

            {/* Auth Buttons */}

            <div className="mt-6 flex gap-3">
              <Link
                href="/login"
                onClick={onClose}
                className="
                  flex-1
                  rounded-xl
                  border
                  border-white/10
                  py-3
                  text-center
                  font-medium
                  text-white
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={onClose}
                className="
                  flex-1
                  rounded-xl
                  bg-red-600
                  py-3
                  text-center
                  font-medium
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                Register
              </Link>
            </div>

            {/* Navigation */}

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Explore
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="
                        group
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        transition-all
                        hover:border-red-500/30
                        hover:bg-white/10
                      "
                    >
                      <Icon
                        size={22}
                        className="
                          mb-3
                          text-red-500
                        "
                      />

                      <span
                        className="
                          text-sm
                          font-medium
                          text-white
                        "
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Footer */}

            <div
              className="
                mt-8
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
              "
            >
              <p className="text-center text-sm text-slate-400">
                Career Liberia © 2026
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}