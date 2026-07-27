import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="NorthPeak Digital — home">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#6D5EF9" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#FF8A65" />
          </linearGradient>
        </defs>
        <path d="M16 4 28 26H4L16 4Z" fill="url(#logo-gradient)" />
        <path d="M16 13 22 26H10L16 13Z" fill="#fff" fillOpacity="0.35" />
      </svg>
      <span className="leading-tight">
        <span
          className={cn(
            "block text-heading-sm font-semibold",
            invert ? "text-text-inverse" : "text-text-primary",
          )}
        >
          NorthPeak
        </span>
        <span
          className={cn(
            "block text-[0.625rem] font-semibold uppercase tracking-[0.25em]",
            invert ? "text-white/60" : "text-text-muted",
          )}
        >
          Digital
        </span>
      </span>
    </Link>
  );
}
