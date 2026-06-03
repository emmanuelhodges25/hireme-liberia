import EmptyState from "@/components/shared/EmptyState";

export default function StartupShowcase() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Startup Showcase
      </h2>

      <EmptyState
        title="No Startups Available Yet"
        description="Innovative startups will be featured here."
      />
    </section>
  );
}