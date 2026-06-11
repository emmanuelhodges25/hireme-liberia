import EmptyState from "@/components/shared/EmptyState";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedJobsSection() {
  return (
    <section>
      <h2 className="mb-6 text-1xl font-bold">
        <SectionHeader
  title="Featured Jobs"
  description="Verified opportunities from trusted recruiters."
/>
      </h2>

      <EmptyState
        title="No Jobs Available Yet"
        description="Recruiter job postings will appear here once the backend is connected."
      />
    </section>
  );
}