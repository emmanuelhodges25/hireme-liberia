import AppShell from "@/components/layout/AppShell";
import AppBackground from "@/components/layout/AppBackground";

import FuturisticHero from "@/features/home/FuturisticHero";

import FeaturedJobsSection from "@/features/home/FeaturedJobsSection";
import FeaturedRecruiters from "@/features/home/FeaturedRecruiters";
import FeaturedCompanies from "@/features/home/FeaturedCompanies";
import LatestScholarships from "@/features/home/LatestScholarships";
import LatestInternships from "@/features/home/LatestInternships";
import StartupShowcase from "@/features/home/StartupShowcase";
import Newsletter from "@/features/home/Newsletter";
import Footer from "@/features/home/Footer";

export default function HomePage() {
  return (
    <>
      <AppBackground />

      <AppShell>
        <div className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="space-y-16">
            <FuturisticHero />

            <FeaturedJobsSection />

            <FeaturedRecruiters />

            <FeaturedCompanies />

            <LatestScholarships />

            <LatestInternships />

            <StartupShowcase />

            <Newsletter />

            <Footer />
          </div>
        </div>
      </AppShell>
    </>
  );
}