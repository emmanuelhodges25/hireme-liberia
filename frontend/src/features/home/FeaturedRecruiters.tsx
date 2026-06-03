import EmptyState from "@/components/shared/EmptyState";

export default function FeaturedRecruitersSection() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Featured Recruiters
      </h2>

      <EmptyState
        title="No Recruiters Available Yet"
        description="Recruiters will appear here once verified."
      />
    </section>
  );
}