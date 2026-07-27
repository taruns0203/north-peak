import {
  Home,
  Package,
  Briefcase,
  Users,
  Tag,
  FileText,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Package },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "About Us", href: "/about", icon: Users },
  { label: "Pricing", href: "/pricing", icon: Tag },
  { label: "Blog", href: "/blog", icon: FileText },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      "Web Development",
      "UI/UX Design",
      "Digital Marketing",
      "Brand Strategy",
      "SEO Optimization",
      "Content Strategy",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Our Work", "Case Studies", "Blog", "Careers", "Contact Us"],
  },
  {
    title: "Resources",
    links: [
      "Guides & eBooks",
      "Webinars",
      "Tools & Templates",
      "FAQ",
      "Documentation",
      "Support",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Refund Policy",
      "GDPR Compliance",
    ],
  },
];
