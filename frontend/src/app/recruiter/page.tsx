import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";

export default function RecruiterPage() {
  return (
    <DashboardLayout title="Recruiter Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Jobs Posted"
          value="0"
        />

        <StatsCard
          title="Applicants"
          value="0"
        />

        <StatsCard
          title="Messages"
          value="0"
        />

        <StatsCard
          title="Profile Views"
          value="0"
        />
      </div>
    </DashboardLayout>
  );
}