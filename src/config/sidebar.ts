import {
  LayoutDashboard,
  Briefcase,
  GraduationCap,
  Rocket,
  Building2,
  Users,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  CircleHelp,
  LogOut,
} from "lucide-react";

export const sidebarItems = [
  {
    section: "MAIN",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Jobs",
        href: "/jobs",
        icon: Briefcase,
      },
      {
        label: "Internships",
        href: "/internships",
        icon: GraduationCap,
      },
      {
        label: "Scholarships",
        href: "/scholarships",
        icon: GraduationCap,
      },
      {
        label: "Startups",
        href: "/startups",
        icon: Rocket,
      },
      {
        label: "Companies",
        href: "/companies",
        icon: Building2,
      },
      {
        label: "Recruiters",
        href: "/recruiters",
        icon: Users,
      },
    ],
  },

  {
    section: "TOOLS",
    items: [
      {
        label: "CV Builder",
        href: "/cv-builder",
        icon: FileText,
      },
      {
        label: "Letter Builder",
        href: "/letter-builder",
        icon: FileText,
      },
      {
        label: "Messages",
        href: "/messages",
        icon: MessageSquare,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: Bell,
      },
    ],
  },

  {
    section: "SYSTEM",
    items: [
      {
        label: "Settings",
        href: "/settings",
        icon: Settings,
      },
      {
        label: "Help Center",
        href: "/help",
        icon: CircleHelp,
      },
      {
        label: "Logout",
        href: "/logout",
        icon: LogOut,
      },
    ],
  },
];