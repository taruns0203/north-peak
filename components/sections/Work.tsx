import {
  ArrowUpRight,
  BarChart3,
  Globe,
  LayoutGrid,
  Monitor,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────── */

type Project = {
  title: string;
  description: string;
  category: string;
  categoryIcon: typeof Globe;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "EduSmart ERP",
    description:
      "A comprehensive school management system to simplify administration and improve communication.",
    category: "Web Application",
    categoryIcon: LayoutGrid,
    image: "/images/work/edusmart.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    title: "Flavoria Restaurant",
    description:
      "A premium website for a fine dining restaurant with online reservations and beautiful menu experience.",
    category: "Website",
    categoryIcon: Globe,
    image: "/images/work/flavoria.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Contentful"],
  },
  {
    title: "FinTrack Dashboard",
    description:
      "A personal finance dashboard to track expenses, set budgets and achieve financial goals.",
    category: "Web Application",
    categoryIcon: LayoutGrid,
    image: "/images/work/fintrack.png",
    tags: ["Next.js", "TypeScript", "Recharts", "Prisma"],
  },
  {
    title: "EstateX Mobile App",
    description:
      "A real estate mobile app for browsing properties, virtual tours and booking visits seamlessly.",
    category: "Mobile App",
    categoryIcon: Smartphone,
    image: "/images/work/estatex.png",
    tags: ["React Native", "TypeScript", "Expo", "Firebase"],
  },
];

const filters = [
  { label: "All Projects", icon: LayoutGrid, active: true },
  { label: "Web Apps", icon: Globe, active: false },
  { label: "Mobile Apps", icon: Smartphone, active: false },
  { label: "Dashboards", icon: BarChart3, active: false },
  { label: "Websites", icon: Monitor, active: false },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "6+", label: "Years Experience" },
];

/* ──────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────── */

export function Work() {
  return (
    <Section aria-labelledby="work-heading">
      <Container wide>
        {/* ── Header ─────────────────────────────────── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-label inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Our Work
            </span>

            <Heading as="h2" variant="section" id="work-heading" className="mt-4">
              Featured <span className="italic">Work</span>
            </Heading>

            <Text variant="body-lg" className="mt-3 max-w-lg">
              We build digital products that drive results. Here are some of our
              recent projects that helped businesses grow and transform.
            </Text>
          </div>

          {/* Trust badge + CTA — desktop only */}
          <div className="hidden shrink-0 items-end gap-5 lg:flex lg:flex-col">
            <div className="flex items-center gap-3">
              <span className="bg-brand-primary grid h-11 w-11 place-items-center rounded-full">
                <Star className="h-5 w-5 fill-white text-white" />
              </span>
              <div>
                <p className="text-body-sm text-text-primary font-semibold">
                  Crafted with strategy
                </p>
                <p className="text-caption text-text-muted">Designed for impact</p>
              </div>
            </div>

            <Button
              href="/work"
              size="lg"
              trailingIcon={<ArrowUpRight className="h-5 w-5" />}
              className="bg-brand-primary hover:bg-brand-primary-hover"
            >
              View All Projects
            </Button>
          </div>
        </div>

        {/* ── Filter tabs ────────────────────────────── */}
        <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
          {filters.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              type="button"
              className={cn(
                "text-body-sm inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-medium transition-colors",
                active
                  ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                  : "border-border-default bg-background-surface text-text-secondary hover:bg-background-secondary",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {/* ── Project cards ──────────────────────────── */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* ── Stats row ──────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center gap-6 rounded-[var(--radius-md)] border border-border-light bg-background-surface p-6 sm:flex-row sm:justify-between lg:mt-16 lg:px-10 lg:py-8">
          <span className="bg-brand-primary grid h-11 w-11 shrink-0 place-items-center rounded-full">
            <Star className="h-5 w-5 fill-white text-white" />
          </span>

          <div className="grid w-full grid-cols-2 gap-6 text-center sm:flex sm:flex-1 sm:justify-around sm:text-left">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-heading-lg text-text-primary font-bold">{value}</p>
                <p className="text-caption text-text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile CTA ─────────────────────────────── */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Button
            href="/work"
            size="lg"
            trailingIcon={<ArrowUpRight className="h-5 w-5" />}
            className="bg-brand-primary hover:bg-brand-primary-hover w-full sm:w-auto"
          >
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}

/* ──────────────────────────────────────────────────────────
   ProjectCard — extracted for readability (same file)
   ────────────────────────────────────────────────────────── */

function ProjectCard({
  title,
  description,
  category,
  categoryIcon: CategoryIcon,
  image,
  tags,
}: Project) {
  return (
    <article
      className={cn(
        "group flex flex-row overflow-hidden rounded-[var(--radius-md)] border border-border-light",
        "bg-background-surface shadow-sm",
        "transition-all duration-300 ease-[var(--ease-default)]",
        "hover:-translate-y-1 hover:shadow-md",
        "md:flex-col",
      )}
    >
      {/* Screenshot */}
      <div className="relative w-[45%] shrink-0 md:aspect-[16/10] md:w-full">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 45vw"
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        {/* Category + arrow */}
        <div className="flex items-start justify-between gap-2">
          <span className="bg-brand-primary/10 text-brand-primary inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
            <CategoryIcon className="h-3 w-3" />
            {category}
          </span>
          <ArrowUpRight className="text-text-muted h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <Heading as="h3" variant="sm" className="mt-3">
          {title}
        </Heading>

        <Text variant="caption" className="mt-1.5 grow">
          {description}
        </Text>

        {/* Tech tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-text-muted rounded-full border border-border-default px-2.5 py-0.5 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
