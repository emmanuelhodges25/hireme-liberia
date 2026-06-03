import EmptyState from "@/components/shared/EmptyState";

export default function LatestInternshipsSection() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Latest Internships
      </h2>

      <EmptyState
        title="No Internships Available Yet"
        description="Internship opportunities will appear here."
      />
    </section>
  );
}