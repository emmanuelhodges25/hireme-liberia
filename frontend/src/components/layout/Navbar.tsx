import Logo from "../branding/Logo";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="lg:hidden">
          <MobileSidebar />
        </div>

        <div className="hidden lg:block">
          <Logo />
        </div>

        <div className="flex gap-3">
          <button className="rounded-lg border px-4 py-2">
            Login
          </button>

          <button className="rounded-lg bg-[#E60023] px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}