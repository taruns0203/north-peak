import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant = "hero" | "section" | "lg" | "md" | "sm";

const variantStyles: Record<HeadingVariant, string> = {
  hero: "text-display-hero",
  section: "text-display-section",
  lg: "text-heading-lg",
  md: "text-heading-md",
  sm: "text-heading-sm",
};

type HeadingProps = {
  /** Semantic heading level — choose for document outline, independent of size. */
  as?: HeadingLevel;
  /** Visual typography token. Defaults to `section`. */
  variant?: HeadingVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"h2">, "className" | "children">;

/**
 * Heading — display/heading typography primitive.
 * Decouples semantic level (`as`) from visual size (`variant`) so you keep a
 * correct document outline while sizing freely. `hero`/`section` use Fraunces;
 * `lg`/`md`/`sm` use Geist — per our type spec.
 *
 * Use for titles only. For paragraphs/labels use `Text`.
 */
export function Heading({
  as: Component = "h2",
  variant = "section",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn("text-text-primary text-balance", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
