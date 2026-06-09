import UserProfileCard from "../UserProfileCard";
import Image from "next/image";

export default function MainSidebar() {
  return (
   <div
  className="
    relative
    flex
    h-screen
    w-80
    flex-col
    overflow-hidden
    border-r
    border-white/10
    p-6
    backdrop-blur-xl
  "
>
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('/images/sidebar-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  <div className="absolute inset-0 bg-[#06173A]/90" />

  <div className="relative z-10 flex h-full flex-col"></div>
      <div>
        <div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="HireMe Liberia"
    width={42}
    height={42}
  />

  <div>
    <h1 className="text-xl font-bold text-white">
      HireMe Liberia
    </h1>

    <p className="text-xs text-slate-400">
      Opportunity Platform
    </p>
  </div>
</div>

        <p className="text-sm text-slate-400">
          Opportunity Platform
        </p>
      </div>

      <div className="mt-8">
        <input
  type="text"
  placeholder="Search opportunities..."
  className="
    w-full
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-4
    py-3
    text-white
    placeholder:text-slate-500
    backdrop-blur-xl
    focus:border-[#E60023]
    focus:outline-none
  "
/>
      </div>

      <div className="mt-10 flex-1 space-y-2">
        <SidebarLink title="Dashboard" />
        <SidebarLink title="Jobs" />
        <SidebarLink title="Internships" />
        <SidebarLink title="Scholarships" />
        <SidebarLink title="Startups" />
        <SidebarLink title="Companies" />
        <SidebarLink title="Recruiters" />
        <SidebarLink title="CV Builder" />
        <SidebarLink title="Letter Builder" />
        <SidebarLink title="Messages" />
      </div>

      <div className="mb-6 rounded-3xl border border-[#E60023]/20 bg-[#E60023]/10 p-5">
        <h3 className="font-semibold text-white">
          Upgrade to Premium
        </h3>

        <p className="mt-2 text-sm text-slate-300">
          Unlock recruiter tools, analytics,
          featured listings and more.
        </p>

        <button className="mt-4 w-full rounded-xl bg-[#E60023] py-3 font-medium text-white">
          Upgrade
        </button>
      </div>

      <UserProfileCard />
    </div>
  );
}

function SidebarLink({
  title,
}: {
  title: string;
}) {
  return (
    <button
      className="
        group
        flex
        w-full
        items-center
        rounded-2xl
        px-4
        py-3
        text-left
        text-slate-300
        transition-all
        hover:bg-white/10
        hover:text-white
      "
    >
      <span className="transition-transform group-hover:translate-x-1">
        {title}
      </span>
    </button>
  );
}