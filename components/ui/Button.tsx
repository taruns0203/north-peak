import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium " +
  "whitespace-nowrap select-none transition-[background-color,box-shadow,color] " +
  "ease-[var(--ease-default)] duration-[var(--duration-fast)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-text-inverse shadow-sm hover:bg-brand-primary-hover hover:shadow-md",
  secondary:
    "bg-background-surface text-text-primary border border-border-default hover:bg-background-secondary",
  ghost: "bg-transparent text-text-primary hover:bg-background-secondary",
  outline:
    "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-text-inverse",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-body-sm",
  md: "h-11 px-6 text-body-sm",
  lg: "h-13 px-8 text-body-md",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon rendered before the label. */
  leadingIcon?: ReactNode;
  /** Icon rendered after the label. */
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button — primary interactive primitive (Geist).
 * Encapsulates every visual state (variant/size/focus/disabled) so no section
 * hand-rolls button styling. Renders a real <button> by default, or a Next
 * <Link> when `href` is provided — so nav CTAs stay semantic anchors.
 */
export function Button({
  variant = "primary",
  size = "md",
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);
  const content = (
    <>
      {leadingIcon}
      {children}
      {trailingIcon}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link className={classes} {...props}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
