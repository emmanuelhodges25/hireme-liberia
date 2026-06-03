import EmptyState from "@/components/shared/EmptyState";

export default function FeaturedJobsSection() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Featured Jobs
      </h2>

      <EmptyState
        title="No Jobs Available Yet"
        description="Recruiter job postings will appear here once the backend is connected."
      />
    </section>
  );
}