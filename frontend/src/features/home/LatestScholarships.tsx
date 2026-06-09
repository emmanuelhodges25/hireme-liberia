import EmptyState from "@/components/shared/EmptyState";
import SectionHeader from "@/components/ui/SectionHeader";
export default function LatestScholarshipsSection() {
  return (
    <section>
      <h2 className="mb-6 text-1xl font-bold">
       <SectionHeader
  title="Latest Scholarships"
  description="Discover the latest scholarship opportunities available for students. Explore and apply for scholarships that can help you achieve your educational goals."
/> 
      </h2>

      <EmptyState
        title="No Scholarships Available Yet"
        description="Scholarship opportunities will appear here."
      />
    </section>
  );
}