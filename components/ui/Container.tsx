import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  /** Element to render as. Defaults to `div`. */
  as?: T;
  /** Use the wider `container.max` (1280px) instead of `container.content` (1180px). */
  wide?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Container — horizontal layout primitive.
 * Centers content, caps width to a layout token, and applies responsive
 * gutters. Every section's inner content should sit inside a Container so
 * horizontal rhythm stays consistent site-wide.
 *
 * Do NOT use it for vertical spacing — that's `Section`'s job.
 */
export function Container<T extends ElementType = "div">({
  as,
  wide = false,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-[max(env(safe-area-inset-left),1.25rem)] md:px-[max(env(safe-area-inset-left),1.5rem)] lg:px-[max(env(safe-area-inset-left),2rem)]",
        wide ? "max-w-[var(--container-max)]" : "max-w-[var(--container-content)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
