import AppShell from "@/components/layout/AppShell";

import HeroSection from "@/features/home/HeroSection";
import StatsSection from "@/features/home/StatsSection";
import FeaturedJobs from "@/features/home/FeaturedJobs";
import FeaturedOpportunities from "@/features/home/FeaturedOpportunities";
import CTASection from "@/features/home/CTASection";

import SearchBar from "@/features/home/SearchBar";
import FeaturedRecruiters from "@/features/home/FeaturedRecruiters";
import FeaturedCompanies from "@/features/home/FeaturedCompanies";
import LatestScholarships from "@/features/home/LatestScholarships";
import LatestInternships from "@/features/home/LatestInternships";
import StartupShowcase from "@/features/home/StartupShowcase";
import Newsletter from "@/features/home/Newsletter";
import Footer from "@/features/home/Footer";

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-16">
        <HeroSection />

        <SearchBar />

        <StatsSection />

        <FeaturedJobs />

        <FeaturedRecruiters />

        <FeaturedCompanies />

        <LatestScholarships />

        <LatestInternships />

        <StartupShowcase />

        <FeaturedOpportunities />

        <CTASection />

        <Newsletter />

        <Footer />
      </div>
    </AppShell>
  );
}