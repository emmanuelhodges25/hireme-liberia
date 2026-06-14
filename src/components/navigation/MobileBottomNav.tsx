"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  Home,
  Briefcase,
  Bell,
  MessageCircle,
  Menu,
} from "lucide-react";

import ExpandableBottomSheet from "./ExpandableBottomSheet";

const tabs = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/jobs", icon: Briefcase, label: "Jobs" },
  { href: "/messages", icon: MessageCircle, label: "Chat" },
  { href: "/notifications", icon: Bell, label: "Alerts" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollingDown = current > lastScrollY.current;

          if (current > 120 && scrollingDown) {
            setVisible(false);
          } else {
            setVisible(true);
          }

          lastScrollY.current = current;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
            className="
              fixed bottom-4 left-1/2 z-50 w-[95%] max-w-md
              -translate-x-1/2
              rounded-4xl
              border border-white/10
              bg-white/5 backdrop-blur-3xl
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              lg:hidden
            "
          >
            <div className="relative flex items-center justify-around py-3">
              {/* ACTIVE INDICATOR */}
              <motion.div
                layout
                className="
                  absolute bottom-2 h-10 w-14
                  rounded-2xl
                  bg-white/10
                "
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                style={{
                  left:
                    tabs.findIndex((t) => t.href === pathname) *
                    25 +
                    "%",
                }}
              />

              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = pathname === tab.href;

                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className="relative flex flex-col items-center gap-1 px-3"
                  >
                    <motion.div
                      whileTap={{ scale: 0.85 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      <Icon
                        size={22}
                        className={
                          active
                            ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                            : "text-slate-400"
                        }
                      />
                    </motion.div>

                    <span
                      className={`text-[11px] ${
                        active
                          ? "text-white"
                          : "text-slate-500"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </Link>
                );
              })}

              {/* CENTER ACTION BUTTON */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setOpen(true)}
                className="
                  absolute left-1/2 -translate-x-1/2 -top-6
                  flex h-16 w-16 items-center justify-center
                  rounded-full
                  bg-linear-to-r from-red-500 via-purple-500 to-blue-600
                  shadow-[0_15px_50px_rgba(0,0,0,0.5)]
                  border border-white/20
                "
              >
                <Menu size={24} className="text-white" />
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <ExpandableBottomSheet
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}