import {
  ArrowRight,
  Briefcase,
  Clock,
  Code2,
  Compass,
  Heart,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, scalable and secure websites & web apps built with modern technologies.",
    illustration: "/images/services/web-dev2.png",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive and user-centered designs that create memorable experiences.",
    illustration: "/images/services/ui-ux2.png",
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    description:
      "Strategic branding that defines your identity and sets you apart from the competition.",
    illustration: "/images/services/brand.png",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase visibility and accelerate business growth.",
    illustration: "/images/services/marketing.png",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve rankings, drive organic traffic and grow your business with SEO best practices.",
    illustration: "/images/services/seo.png",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    description:
      "Engaging content that tells your story, builds trust and converts your audience.",
    illustration: "/images/services/content.png",
  },
];

const stats = [
  {
    icon: TrendingUp,
    value: "250%+",
    label: "Average Growth",
    caption: "Our clients achieve amazing results",
  },
  {
    icon: Briefcase,
    value: "150+",
    label: "Projects Delivered",
    caption: "Successful projects across industries",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Client Satisfaction",
    caption: "Long-term relationships built on trust",
  },
  {
    icon: Clock,
    value: "6+",
    label: "Years Experience",
    caption: "Delivering excellence since day one",
  },
];

/* ──────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────── */

export function Services() {
  return (
    <Section aria-labelledby="services-heading">
      <Container wide>
        {/* Badge — centered */}
        <div className="flex justify-center">
          <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-label inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            What We Do
          </span>
        </div>

        {/* Intro — left-aligned heading */}
        <div className="mt-8 max-w-2xl">
          <Text variant="body-md" className="text-text-secondary">
            End-to-end digital solutions that
          </Text>

          <Heading as="h2" variant="section" id="services-heading" className="mt-2">
            Build Brands.{" "}
            <br className="hidden sm:block" />
            Drive <span className="text-gradient">Growth.</span>
          </Heading>

          <Text variant="body-lg" className="mt-4 max-w-lg">
            We combine strategy, design and technology to create digital experiences
            that attract, engage and convert.
          </Text>
        </div>

        {/* Service cards — 6 columns on desktop */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-16 lg:gap-5">
          {services.map(({ icon: Icon, title, description, illustration }) => (
            <article
              key={title}
              className={cn(
                "group flex flex-col rounded-[var(--radius-md)] border border-border-light",
                "bg-background-surface p-5 shadow-sm",
                "transition-all duration-300 ease-[var(--ease-default)]",
                "hover:-translate-y-1 hover:shadow-md",
              )}
            >
              {/* Service illustration */}
              <div className="mb-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-[var(--radius-sm)]">
                <Image
                  src={illustration}
                  alt=""
                  width={400}
                  height={400}
                  className="h-full w-full object-contain"
                />
              </div>

              <Heading as="h3" variant="sm" className="text-heading-sm">
                {title}
              </Heading>

              <Text variant="caption" className="mt-2 grow">
                {description}
              </Text>

              <span className="text-brand-primary mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors group-hover:underline">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>

        {/* Stats row — 4 columns on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {stats.map(({ icon: Icon, value, label, caption }) => (
            <div
              key={label}
              className={cn(
                "flex items-start gap-4 rounded-[var(--radius-md)] border border-border-light",
                "bg-background-surface p-5 shadow-sm",
              )}
            >
              <span className="bg-brand-primary/10 grid h-12 w-12 shrink-0 place-items-center rounded-full">
                <Icon className="text-brand-primary h-6 w-6" aria-hidden />
              </span>

              <div>
                <p className="text-heading-lg text-text-primary font-bold">{value}</p>
                <p className="text-body-sm text-text-primary mt-0.5 font-semibold">
                  {label}
                </p>
                <p className="text-caption text-text-muted mt-1">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
