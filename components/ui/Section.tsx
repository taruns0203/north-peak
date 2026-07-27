import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps<T extends ElementType> = {
  /** Element to render as. Defaults to `section`. */
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Section — vertical rhythm primitive.
 * Applies the responsive vertical padding defined by our layout tokens
 * (mobile 72 → tablet 96 → desktop 120). Every page band should be a
 * Section so vertical spacing is uniform.
 *
 * Do NOT put horizontal padding/max-width here — compose with `Container`.
 */
export function Section<T extends ElementType = "section">({
  as,
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";
  return (
    <Component
      className={cn(
        "py-[var(--section-mobile)] md:py-[var(--section-tablet)] lg:py-[var(--section-desktop)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
