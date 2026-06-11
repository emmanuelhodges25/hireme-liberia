"use client";

import Link from "next/link";

import {
  Home,
  Briefcase,
  MessageCircle,
  Bell,
  Menu,
} from "lucide-react";

import { useState } from "react";

import ExpandableBottomSheet from "./ExpandableBottomSheet";

export default function MobileBottomNav() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <nav
        className="
          fixed
          bottom-4
          left-1/2
          z-40
          w-[95%]
          max-w-md
          -translate-x-1/2
          rounded-3xl
          border
          border-white/10
          bg-black/80
          backdrop-blur-xl
          lg:hidden
        "
      >
        <div className="flex items-center justify-around py-4">
          <Link href="/">
            <Home className="text-white" />
          </Link>

          <Link href="/jobs">
            <Briefcase className="text-white" />
          </Link>

          <Link href="/messages">
            <MessageCircle className="text-white" />
          </Link>

          <Link href="/notifications">
            <Bell className="text-white" />
          </Link>

          <button
            onClick={() =>
              setOpen(true)
            }
          >
            <Menu className="text-white" />
          </button>
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