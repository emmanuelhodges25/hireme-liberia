import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";

export default function AdminPage() {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Pending Jobs"
          value="0"
        />

        <StatsCard
          title="Users"
          value="0"
        />

        <StatsCard
          title="Reports"
          value="0"
        />

        <StatsCard
          title="Companies"
          value="0"
        />
      </div>
    </DashboardLayout>
  );
}