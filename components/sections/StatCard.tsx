import { Briefcase, TrendingUp, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Stat = {
  icon: LucideIcon;
  label: string;
  value: string;
  caption: string;
};

export const heroStats: [Stat, Stat] = [
  {
    icon: TrendingUp,
    label: "Business Growth",
    value: "+250%",
    caption: "Average Increase",
  },
  {
    icon: Briefcase,
    label: "Projects Delivered",
    value: "150+",
    caption: "Successful Projects",
  },
];

export function StatCard({
  icon: Icon,
  label,
  value,
  caption,
  className,
}: Stat & { className?: string }) {
  return (
    <div
      className={cn(
        "glass flex items-center gap-4 rounded-lg p-4 shadow-lg",
        className,
      )}
    >
      <span className="bg-brand-primary/10 grid h-12 w-12 shrink-0 place-items-center rounded-full">
        <Icon className="text-brand-primary h-6 w-6" />
      </span>
      <div>
        <p className="text-caption text-text-muted">{label}</p>
        <p className="text-heading-md text-text-primary font-semibold">{value}</p>
        <p className="text-caption text-text-muted">{caption}</p>
      </div>
    </div>
  );
}
