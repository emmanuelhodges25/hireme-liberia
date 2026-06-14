import JobsHero from "@/features/jobs/JobsHero";
import JobsFilters from "@/features/jobs/JobsFilters";
import TrendingCategories from "@/features/jobs/TrendingCategories";
import FeaturedEmployers from "@/features/jobs/FeaturedEmployers";
import JobsGrid from "@/features/jobs/JobsGrid";
import CareerResources from "@/features/jobs/CareerResources";
import JobsCTA from "@/features/jobs/JobsCTA";

export default function JobsPage() {
  return (
    <div className="space-y-10">
      <JobsHero />

      <JobsFilters />

      <TrendingCategories />

      <FeaturedEmployers />

      <JobsGrid />

      <CareerResources />

      <JobsCTA />
    </div>
  );
}