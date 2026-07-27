"use client";

import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  slides: ReactNode[];
};

export function TestimonialCarousel({ slides }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      {/* Slides wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-[var(--ease-default)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-200",
              activeIndex === index
                ? "w-6 bg-brand-primary"
                : "w-2.5 bg-border-default hover:bg-text-muted",
            )}
          />
        ))}
      </div>
    </div>
  );
}

type LogoCarouselProps = {
  children: ReactNode;
};

export function LogoCarousel({ children }: LogoCarouselProps) {
  const scrollLeft = () => {
    const el = document.getElementById("logo-scroll-container");
    if (el) el.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = document.getElementById("logo-scroll-container");
    if (el) el.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center gap-3">
      <button
        type="button"
        aria-label="Scroll left"
        onClick={scrollLeft}
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-default bg-background-surface text-text-muted shadow-sm transition-colors hover:bg-background-secondary hover:text-text-primary"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <div
        id="logo-scroll-container"
        className="no-scrollbar flex flex-1 items-center gap-8 overflow-x-auto scroll-smooth py-2"
      >
        {children}
      </div>

      <button
        type="button"
        aria-label="Scroll right"
        onClick={scrollRight}
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-default bg-background-surface text-text-muted shadow-sm transition-colors hover:bg-background-secondary hover:text-text-primary"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
