import { ReactNode } from "react";

interface DashboardLayoutProps {
  title: string;
  children: ReactNode;
}

export default function DashboardLayout({
  title,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back to HireMe Liberia.
        </p>
      </div>

      {children}
    </div>
  );
}