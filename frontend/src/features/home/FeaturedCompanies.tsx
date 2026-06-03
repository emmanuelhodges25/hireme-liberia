import EmptyState from "@/components/shared/EmptyState";

export default function FeaturedCompaniesSection() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Featured Companies
      </h2>

      <EmptyState
        title="No Companies Available Yet"
        description="Verified companies will appear here."
      />
    </section>
  );
}