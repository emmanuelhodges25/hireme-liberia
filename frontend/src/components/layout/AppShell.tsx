import { ReactNode } from "react";

import IconRail from "./sidebar/IconRail";
import MainSidebar from "./sidebar/MainSidebar";

interface Props {
  children: ReactNode;
}

export default function AppShell({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-transparent">
      <IconRail />

      <MainSidebar />

      <main className="flex-1 overflow-auto p-4 lg:p-8">
        {children}
      </main>
    </div>
  );
}