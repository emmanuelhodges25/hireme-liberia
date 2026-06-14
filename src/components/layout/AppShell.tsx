"use client";

import { ReactNode } from "react";

import TopHeader from "@/components/navigation/TopHeader";
import MobileBottomNav from "@/components/navigation/MobileBottomNav";
import PageGlow from "@/components/layout/PageGlow";

interface Props {
  children: ReactNode;
}

export default function AppShell({
  children,
}: Props) {
  return (
    <div
      className="
        min-h-screen
        bg-linear-to-br
        from-slate-950
        via-black
        to-slate-900
      "
    >
      <PageGlow />
      <TopHeader />

      <main
        className="
          mx-auto
          max-w-7xl
          px-4
          pb-32
          pt-8
        "
      >
        {children}
      </main>

      <MobileBottomNav />
    </div>
  );
}