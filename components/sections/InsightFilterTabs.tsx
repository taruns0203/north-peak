"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Strategy",
  "Design",
  "Development",
  "Growth",
  "Branding",
];

export function InsightFilterTabs() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="no-scrollbar mt-8 flex items-center justify-start gap-2 overflow-x-auto pb-2 sm:justify-center">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "text-body-sm shrink-0 rounded-full px-5 py-2 font-medium transition-all duration-200",
              isActive
                ? "bg-brand-primary text-white shadow-sm"
                : "border border-border-default bg-background-surface text-text-secondary hover:bg-background-secondary hover:text-text-primary",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
