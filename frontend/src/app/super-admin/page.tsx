import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";

export default function SuperAdminPage() {
  return (
    <DashboardLayout title="Super Admin Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Revenue"
          value="$0"
        />

        <StatsCard
          title="Subscriptions"
          value="0"
        />

        <StatsCard
          title="Admins"
          value="0"
        />

        <StatsCard
          title="System Logs"
          value="0"
        />
      </div>
    </DashboardLayout>
  );
}