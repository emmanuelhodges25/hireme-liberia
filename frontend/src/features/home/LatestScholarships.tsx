import EmptyState from "@/components/shared/EmptyState";

export default function LatestScholarshipsSection() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Latest Scholarships
      </h2>

      <EmptyState
        title="No Scholarships Available Yet"
        description="Scholarship opportunities will appear here."
      />
    </section>
  );
}