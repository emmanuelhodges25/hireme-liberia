"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/lib/navigation";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation menu"
          className="rounded-md p-2"
        >
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-70">
        <SheetHeader>
          <SheetTitle>
            HireMe Liberia
          </SheetTitle>

          <SheetDescription>
            Navigate through the platform.
          </SheetDescription>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-2">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}