import EmptyState from "@/components/shared/EmptyState";
import SectionHeader from "@/components/ui/SectionHeader";
export default function FeaturedCompaniesSection() {
  return (
    <section>
      <h2 className="mb-6 text-1xl font-bold">
        <SectionHeader
  title="Featured Companies"
  description="Discover top companies that have been verified for their excellence and innovation."
/>
      </h2>

      <EmptyState
        title="No Companies Available Yet"
        description="Verified companies will appear here."
      />
    </section>
  );
}