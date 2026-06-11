import Logo from "../branding/Logo";

import Link from "next/link";
import MobileBottomNav from "../navigation/MobileBottomNav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="lg:hidden">
          <MobileBottomNav />
        </div>

        <div className="hidden lg:block">
          <Logo />
        </div>

       <div className="flex gap-3">
  <Link
    href="/login"
    className="rounded-lg border px-4 py-2 transition hover:bg-slate-100"
  >
    Login
  </Link>

  <Link
    href="/register"
    className="rounded-lg bg-[#E60023] px-4 py-2 text-white transition hover:opacity-90"
  >
    Sign Up
  </Link>
</div>
      </div>
    </header>
  );
}