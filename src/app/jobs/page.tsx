import JobsHeader from "@/features/jobs/JobsHeader";
import JobsFilters from "@/features/jobs/JobsFilters";
import JobsGrid from "@/features/jobs/JobsGrid";

export default function JobsPage() {
  
  return (
    <div className="space-y-8">
      <JobsHeader />

      <JobsFilters />

      <JobsGrid />
    </div>
  );
}