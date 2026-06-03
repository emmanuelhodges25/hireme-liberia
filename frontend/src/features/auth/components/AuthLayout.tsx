import { ReactNode } from "react";
import Logo from "@/components/branding/Logo";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-center p-20 bg-linear-to-br from-[#06173A] via-[#002B7F] to-[#E60023] text-white">
        <Logo />

        <h1 className="mt-10 text-6xl font-bold">
          Empowering Liberia Through Opportunity
        </h1>

        <p className="mt-6 text-lg opacity-90">
          Jobs, internships,
          scholarships,
          startups, recruiters,
          and career growth.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl font-bold">
              2,500+
            </h2>
            <p>Jobs</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              15,000+
            </h2>
            <p>Students</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              500+
            </h2>
            <p>Recruiters</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              300+
            </h2>
            <p>Scholarships</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold">
            {title}
          </h2>

          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}