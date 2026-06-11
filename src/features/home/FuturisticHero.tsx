import GlassCard from "@/components/ui/GlassCard";

export default function FuturisticHero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              🇱🇷 Liberia&apos;s Opportunity Platform
            </span>

            <h1 className="mt-6 text-5xl font-bold text-white lg:text-7xl">
              Find Jobs.
              <br />
              Build Careers.
              <br />
              Change Lives.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Connecting talented Liberians
              with jobs, internships,
              scholarships, startups and
              life-changing opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#E60023] px-6 py-3 font-medium text-white transition hover:scale-105">
                Explore Jobs
              </button>

              <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur">
                Become a Recruiter
              </button>
            </div>
          </div>

          {/* Right */}
          <GlassCard className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-white">
                  Live Opportunities
                </h3>

                <p className="text-5xl font-bold text-white">
                  0
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-4">
                  <p className="text-slate-400">
                    Jobs
                  </p>
                  <h4 className="text-2xl font-bold text-white">
                    0
                  </h4>
                </GlassCard>

                <GlassCard className="p-4">
                  <p className="text-slate-400">
                    Scholarships
                  </p>
                  <h4 className="text-2xl font-bold text-white">
                    0
                  </h4>
                </GlassCard>

                <GlassCard className="p-4">
                  <p className="text-slate-400">
                    Startups
                  </p>
                  <h4 className="text-2xl font-bold text-white">
                    0
                  </h4>
                </GlassCard>

                <GlassCard className="p-4">
                  <p className="text-slate-400">
                    Recruiters
                  </p>
                  <h4 className="text-2xl font-bold text-white">
                    0
                  </h4>
                </GlassCard>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}