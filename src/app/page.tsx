import AppShell from "@/components/layout/AppShell";



import QuickCategories from "@/features/home/QuickCategories";
import TrendingOpportunities from "@/features/home/TrendingOpportunities";

import FeaturedJobsSection from "@/features/home/FeaturedJobsSection";
import FeaturedCompanies from "@/features/home/FeaturedCompanies";

import Footer from "@/features/home/Footer";

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-10">
        <QuickCategories />

        <TrendingOpportunities />

        <FeaturedJobsSection />

        <FeaturedCompanies />

        <Footer />
      </div>
    </AppShell>
  );
}