import EmptyState from "@/components/shared/EmptyState";
import SectionHeader from "@/components/ui/SectionHeader";
export default function LatestInternshipsSection() {
  return (
    <section>
      <h2 className="mb-6 text-1xl font-bold">
       <SectionHeader
       title="Latest Internships"
       description="Discover the latest internship opportunities available for students and recent graduates."
     /> 
      </h2>

      <EmptyState
        title="No Internships Available Yet"
        description="Internship opportunities will appear here."
      />
    </section>
  );
}