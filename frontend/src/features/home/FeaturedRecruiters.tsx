import EmptyState from "@/components/shared/EmptyState";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedRecruitersSection() {
  return (
    <section>
      <h2 className="mb-6 text-1xl font-bold">
        <SectionHeader
  title="Featured Recruiters"
  description="Connect with verified professionals in your field."
/>
      </h2>

      <EmptyState
        title="No Recruiters Available Yet"
        description="Recruiters will appear here once verified."
      />
    </section>
  );
}