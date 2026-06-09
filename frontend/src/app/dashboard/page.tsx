import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <DashboardLayout title="User Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Saved Jobs"
          value="0"
        />

        <StatsCard
          title="Applications"
          value="0"
        />

        <StatsCard
          title="Messages"
          value="0"
        />

        <StatsCard
          title="Notifications"
          value="0"
        />
      </div>
    </DashboardLayout>
  );
}