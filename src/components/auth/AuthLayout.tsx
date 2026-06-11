import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: Props) {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020817]" />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,#002B7F,transparent_35%),radial-gradient(circle_at_bottom_right,#E60023,transparent_35%)]
          opacity-30
        "
      />

      <div className="relative z-10 flex w-full">
        {children}
      </div>
    </div>
  );
}