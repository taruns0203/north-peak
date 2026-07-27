import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve conflicting Tailwind utilities.
 * `clsx` handles conditional/array/object syntax; `twMerge` dedupes conflicts
 * (e.g. `px-4 px-6` → `px-6`) so later variant classes reliably win.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
