import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              HireMe Liberia
            </h2>

            <p className="mt-4 max-w-md text-slate-400">
              Connecting talented Liberians with
              jobs, internships, scholarships,
              startups and career opportunities.
            </p>

            <div className="mt-6 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-white/10" />
              <div className="h-10 w-10 rounded-full bg-white/10" />
              <div className="h-10 w-10 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Platform
            </h3>

            <div className="space-y-3">
              <Link href="/jobs" className="block text-slate-400 hover:text-white">
                Jobs
              </Link>

              <Link href="/internships" className="block text-slate-400 hover:text-white">
                Internships
              </Link>

              <Link href="/scholarships" className="block text-slate-400 hover:text-white">
                Scholarships
              </Link>

              <Link href="/startups" className="block text-slate-400 hover:text-white">
                Startups
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Company
            </h3>

            <div className="space-y-3">
              <Link href="/about" className="block text-slate-400 hover:text-white">
                About
              </Link>

              <Link href="/contact" className="block text-slate-400 hover:text-white">
                Contact
              </Link>

              <Link href="/developer" className="block text-slate-400 hover:text-white">
                Developer
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Resources
            </h3>

            <div className="space-y-3">
              <Link href="/cv-builder" className="block text-slate-400 hover:text-white">
                CV Builder
              </Link>

              <Link href="/application-letter-builder" className="block text-slate-400 hover:text-white">
                Letter Builder
              </Link>

              <Link href="/services" className="block text-slate-400 hover:text-white">
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} HireMe Liberia.
            All rights reserved. Powered by<Link href="https://uniondrop-group.vercel.app">UnionDrop</Link>.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}