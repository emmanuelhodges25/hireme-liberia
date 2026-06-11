"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Home,
  Briefcase,
  Bell,
  MessageCircle,
  Menu,
} from "lucide-react";

import ExpandableBottomSheet from "./ExpandableBottomSheet";

export default function MobileBottomNav() {
  const [open, setOpen] = useState(false);

  const [visible, setVisible] = useState(true);

  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY;

      if (
        currentScroll >
          lastScroll &&
        currentScroll > 100
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [lastScroll]);

  return (
    <>
      <nav
        className={`
          fixed
          bottom-4
          left-1/2
          z-50
          w-[95%]
          max-w-md
          -translate-x-1/2
          rounded-[28px]
          border
          border-white/10
          bg-slate-950/90
          backdrop-blur-2xl
          transition-all
          duration-300
          lg:hidden

          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-24 opacity-0"
          }
        `}
      >
        <div className="flex items-center justify-around py-4">
          <Link
            href="/"
            className="flex flex-col items-center gap-1"
          >
            <Home
              size={22}
              className="text-white"
            />

            <span className="text-xs text-slate-400">
              Home
            </span>
          </Link>

          <Link
            href="/jobs"
            className="flex flex-col items-center gap-1"
          >
            <Briefcase
              size={22}
              className="text-white"
            />

            <span className="text-xs text-slate-400">
              Jobs
            </span>
          </Link>

          <button
            onClick={() =>
              setOpen(true)
            }
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-linear-to-r
              from-red-600
              to-blue-700
              shadow-xl
            "
          >
            <Menu
              size={24}
              className="text-white"
            />
          </button>

          <Link
            href="/messages"
            className="flex flex-col items-center gap-1"
          >
            <MessageCircle
              size={22}
              className="text-white"
            />

            <span className="text-xs text-slate-400">
              Chat
            </span>
          </Link>

          <Link
            href="/notifications"
            className="flex flex-col items-center gap-1"
          >
            <Bell
              size={22}
              className="text-white"
            />

            <span className="text-xs text-slate-400">
              Alerts
            </span>
          </Link>
        </div>
      </nav>

      <ExpandableBottomSheet
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  );
}