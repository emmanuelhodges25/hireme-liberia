"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Jobs", href: "/jobs" },
  { label: "Internships", href: "/internships" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Companies", href: "/companies" },
  { label: "Recruiters", href: "/recruiters" },
  { label: "Profile", href: "/profile" },
  { label: "Messages", href: "/messages" },
  { label: "Notifications", href: "/notifications" },
  { label: "Settings", href: "/settings" },
  {
  label: "CV Builder",
  href: "/cv-builder",
}
];

export default function ExpandableBottomSheet({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-50
              bg-black/60
              backdrop-blur-sm
            "
          />

          <motion.div
            drag="y"
            dragConstraints={{
              top: 0,
              bottom: 500,
            }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 120) {
                onClose();
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="
              fixed
              bottom-0
              left-0
              right-0
              z-50
              h-[90vh]
              overflow-y-auto
              rounded-t-[40px]
              border-t
              border-white/10
              bg-slate-950
              p-6
            "
          >
            {/* Handle */}

            <div className="mb-6 flex justify-center">
              <div
                className="
                  h-1.5
                  w-20
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

                <p className="text-slate-400">
                  Explore Opportunities
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  bg-white/5
                  p-3
                "
              >
                <X className="text-white" />
              </button>
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
                "
              >
                Register
              </Link>
            </div>

            {/* Navigation */}

            <div className="mt-8 grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                    text-left
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  
                  {item.label}
                </Link>
              ))}
            </div>

            {/* User Card */}

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
              <h3 className="font-semibold text-white">
                Welcome to Career Liberia
              </h3>

              <p className="mt-2 text-slate-400">
                Discover jobs, internships,
                scholarships, startups, and career opportunities.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}