import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextVariant = "body-lg" | "body-md" | "body-sm" | "caption" | "label";
type TextTone = "primary" | "secondary" | "muted" | "inverse";

const variantStyles: Record<TextVariant, string> = {
  "body-lg": "text-body-lg",
  "body-md": "text-body-md",
  "body-sm": "text-body-sm",
  caption: "text-caption",
  label: "text-label",
};

const toneStyles: Record<TextTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  inverse: "text-text-inverse",
};

type TextProps<T extends ElementType> = {
  /** Element to render as. Defaults to `p`. Use `span` for inline text. */
  as?: T;
  /** Typography token. Defaults to `body-md`. */
  variant?: TextVariant;
  /** Semantic color tone. Defaults to `secondary`. */
  tone?: TextTone;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Text — body/label typography primitive (Geist only).
 * Handles paragraphs, descriptions, captions and uppercase labels with
 * consistent size + color tone. Never use for titles — that's `Heading`.
 */
export function Text<T extends ElementType = "p">({
  as,
  variant = "body-md",
  tone = "secondary",
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";
  return (
    <Component
      className={cn(variantStyles[variant], toneStyles[tone], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
