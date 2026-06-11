import EmptyState from "@/components/shared/EmptyState";
import SectionHeader from "@/components/ui/SectionHeader";
export default function StartupShowcase() {
  return (
    <section>
      <h2 className="mb-6 text-1xl font-bold">
        <SectionHeader
        title="Startup Showcase"
        description="Discover innovative startups that are making waves in the industry. Explore their groundbreaking solutions and learn how they are shaping the future of technology."
       />
      </h2>

      <EmptyState
        title="No Startups Available Yet"
        description="Innovative startups will be featured here."
      />
    </section>
  );
}