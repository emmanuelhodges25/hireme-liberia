import {
  Home,
  Briefcase,
  GraduationCap,
  Building2,
  Users,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  User,
  Rocket,
} from "lucide-react";

export const navigation = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Jobs",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "Internships",
    href: "/internships",
    icon: GraduationCap,
  },
  {
    title: "Scholarships",
    href: "/scholarships",
    icon: GraduationCap,
  },
  {
    title: "Startups",
    href: "/startups",
    icon: Rocket,
  },
  {
    title: "Recruiters",
    href: "/recruiters",
    icon: Users,
  },
  {
    title: "Companies",
    href: "/companies",
    icon: Building2,
  },
  {
    title: "CV Builder",
    href: "/cv-builder",
    icon: FileText,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];