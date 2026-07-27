"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  Send,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────── */

type Plan = {
  name: string;
  icon: typeof Star;
  description: string;
  monthly: string;
  yearly: string;
  features: { label: string; included: boolean }[];
  cta: string;
  href: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    icon: Send,
    description: "Perfect for startups and small businesses.",
    monthly: "4,999",
    yearly: "49,999",
    features: [
      { label: "Up to 5 Pages Website", included: true },
      { label: "Responsive Design", included: true },
      { label: "Basic SEO Setup", included: true },
      { label: "Contact Form Integration", included: true },
      { label: "Monthly Performance Report", included: true },
      { label: "Priority Support", included: false },
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Pro",
    icon: Star,
    description: "Ideal for growing businesses that need more.",
    monthly: "9,999",
    yearly: "99,999",
    features: [
      { label: "Up to 15 Pages Website", included: true },
      { label: "Custom UI/UX Design", included: true },
      { label: "Advanced SEO & Analytics", included: true },
      { label: "CMS Integration", included: true },
      { label: "Monthly Performance Report", included: true },
      { label: "Priority Support", included: true },
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    description: "For established brands with complex requirements.",
    monthly: "19,999+",
    yearly: "1,99,999+",
    features: [
      { label: "Unlimited Pages", included: true },
      { label: "Custom Web Applications", included: true },
      { label: "Advanced Integrations", included: true },
      { label: "Dedicated Project Manager", included: true },
      { label: "Weekly Performance Reports", included: true },
      { label: "24/7 Priority Support", included: true },
    ],
    cta: "Contact Us",
    href: "/contact",
  },
];

/* ──────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────── */

export function PricingCards() {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      {/* Billing toggle */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-border-default bg-background-surface px-5 py-2.5 shadow-sm">
          <span
            className={cn(
              "text-body-sm font-medium transition-colors",
              !yearly ? "text-text-primary" : "text-text-muted",
            )}
          >
            Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly(!yearly)}
            className="bg-brand-primary relative h-7 w-12 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2"
          >
            <span
              className={cn(
                "absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-200",
                yearly && "translate-x-5",
              )}
            />
          </button>

          <span
            className={cn(
              "text-body-sm font-medium transition-colors",
              yearly ? "text-text-primary" : "text-text-muted",
            )}
          >
            Yearly
          </span>

          <span className="bg-brand-primary/10 text-brand-primary rounded-full px-2.5 py-0.5 text-xs font-semibold">
            Save 20%
          </span>
        </div>
      </div>

      {/* Cards grid */}
      <div className="relative mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
        {/* Decorative purple gradient blob — behind cards */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mx-auto w-3/4 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(109,94,249,0.3) 0%, rgba(168,85,247,0.15) 50%, transparent 80%)",
          }}
        />

        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} yearly={yearly} />
        ))}
      </div>

      {/* Trust note */}
      <p className="text-body-sm text-text-muted mt-10 flex items-center justify-center gap-2 text-center">
        <ShieldCheck className="text-brand-primary h-5 w-5 shrink-0" />
        All plans include{" "}
        <strong className="text-text-primary font-semibold">
          100% satisfaction guarantee.
        </strong>
      </p>
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   PlanCard
   ────────────────────────────────────────────────────────── */

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const { name, icon: Icon, description, monthly, yearly: yearlyPrice, features, cta, href, highlighted } = plan;
  const price = yearly ? yearlyPrice : monthly;
  const period = yearly ? "/year" : "/mo";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[var(--radius-md)] border bg-background-surface p-6 shadow-sm lg:p-8",
        "transition-all duration-300 ease-[var(--ease-default)]",
        "hover:-translate-y-1 hover:shadow-md",
        highlighted
          ? "border-brand-primary border-2 shadow-glow"
          : "border-border-light",
      )}
    >
      {/* Most Popular badge */}
      {highlighted && (
        <span className="bg-brand-gradient absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-md">
          <Star className="h-3.5 w-3.5 fill-white" />
          Most Popular
        </span>
      )}

      {/* Plan icon */}
      <span className="bg-brand-primary/10 grid h-12 w-12 place-items-center rounded-[var(--radius-sm)]">
        <Icon className={cn("h-6 w-6", highlighted ? "text-brand-primary" : "text-brand-primary")} aria-hidden />
      </span>

      {/* Plan name + description */}
      <h3 className={cn("text-heading-md mt-4", highlighted ? "text-brand-primary" : "text-text-primary")}>
        {name}
      </h3>
      <p className="text-caption text-text-muted mt-1">{description}</p>

      {/* Price */}
      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-body-sm text-text-muted">₹</span>
        <span className="text-heading-lg text-text-primary font-bold">{price}</span>
        <span className="text-caption text-text-muted">{period}</span>
      </div>

      {/* Divider */}
      <hr className="border-border-light my-5" />

      {/* Features */}
      <ul className="flex grow flex-col gap-3">
        {features.map(({ label, included }) => (
          <li key={label} className="flex items-start gap-2.5">
            <CheckCircle2
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                included ? "text-brand-primary" : "text-text-muted/40",
              )}
            />
            <span
              className={cn(
                "text-body-sm",
                included ? "text-text-primary" : "text-text-muted/60",
              )}
            >
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-6">
        <Button
          href={href}
          variant={highlighted ? "primary" : "outline"}
          size="lg"
          trailingIcon={<ArrowRight className="h-4 w-4" />}
          className={cn(
            "w-full",
            highlighted && "bg-brand-gradient hover:opacity-90",
          )}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}
