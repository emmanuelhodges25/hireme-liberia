"use client";

import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

import MainSidebar from "./BottomNavbar/MainSidebar";

interface Props {
  children: ReactNode;
}

export default function AppShell({
  children,
}: Props) {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop */}
      <div className="hidden lg:block">
        <MainSidebar />
      </div>

      {/* Mobile Button */}
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          fixed
          left-4
          top-4
          z-50
          rounded-xl
          bg-black/40
          p-3
          text-white
          backdrop-blur
          lg:hidden
        "
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Drawer */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            lg:hidden
          "
        >
          <div className="h-full w-72">
            <MainSidebar />
          </div>
        </div>
      )}

      <main className="flex-1 p-4 lg:p-10">
        {children}
      </main>
    </div>
  );
}