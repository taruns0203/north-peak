import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Clock,
  Code2,
  Heart,
  Lightbulb,
  Palette,
  PenTool,
  ShieldCheck,
  Target,
  Users,
  Zap,
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

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    image: "/images/about/arjun.jpg",
    icon: Award,
  },
  {
    name: "Neha Sharma",
    role: "Design Lead",
    image: "/images/about/neha.jpg",
    icon: Palette,
  },
  {
    name: "Rohan Verma",
    role: "Tech Lead",
    image: "/images/about/rohan.jpg",
    icon: Code2,
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We explore new ideas and technologies to build better solutions.",
  },
  {
    icon: Target,
    title: "Strategy First",
    description:
      "Every product starts with deep understanding and a clear plan.",
  },
  {
    icon: PenTool,
    title: "Craftsmanship",
    description:
      "We care about the details that make experiences exceptional.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "We build fast, reliable, and scalable products that drive growth.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as true partners in their journey.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We believe in transparency, honesty, and long-term relationships.",
  },
];

const stats = [
  { icon: Briefcase, value: "120+", label: "Projects Delivered", caption: "Across diverse industries" },
  { icon: Users, value: "45+", label: "Happy Clients", caption: "Long-term partnerships" },
  { icon: Clock, value: "8+", label: "Years Experience", caption: "Delivering digital solutions" },
  { icon: BarChart3, value: "98%", label: "Client Satisfaction", caption: "We build trust that lasts" },
];

/* ──────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────── */

export function About() {
  return (
    <Section aria-labelledby="about-heading">
      <Container wide>
        {/* ── Hero area — two-column on desktop ────── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Editorial content */}
          <div>
            <span className="text-label text-brand-primary inline-flex items-center gap-2">
              <span className="bg-brand-primary inline-block h-2 w-2 rounded-full" />
              About Us
            </span>

            <Heading as="h2" variant="section" id="about-heading" className="mt-4">
              We&rsquo;re <span className="italic">NorthPeak</span> Digital
            </Heading>

            <Text variant="body-lg" className="mt-4 max-w-lg">
              A team of strategists, designers, and engineers building digital
              products that drive real business results.
            </Text>

            {/* Our Story */}
            <div className="mt-10">
              <p className="text-body-sm text-text-primary inline-flex items-center gap-2 font-semibold">
                <span className="bg-brand-primary inline-block h-2 w-2 rounded-full" />
                Our Story
              </p>

              <Text variant="body-sm" className="mt-3">
                NorthPeak Digital was founded with a simple belief—great digital
                experiences can transform businesses. We combine strategy, design,
                and technology to build products that are beautiful, functional,
                and built to scale.
              </Text>

              <Text variant="body-sm" className="mt-3">
                From early startups to established brands, we partner with
                ambitious teams to bring ideas to life and create impact that
                lasts.
              </Text>
            </div>

            <Button
              href="/contact"
              size="lg"
              trailingIcon={<ArrowRight className="h-5 w-5" />}
              className="mt-8"
            >
              Let&apos;s Work Together
            </Button>
          </div>

          {/* Right — Team composition (desktop) */}
          <div className="relative hidden lg:block">
            {/* Trust badge */}
            <div className="bg-brand-primary absolute -top-2 right-0 z-10 rounded-[var(--radius-sm)] px-5 py-3 text-sm font-medium text-white shadow-md">
              Great products start
              <br />
              with great people.
            </div>

            {/* Group photo */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
              <Image
                src="/images/about/team-group.jpg"
                alt="The NorthPeak Digital team collaborating together"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>

            {/* Overlapping team cards */}
            <div className="absolute -bottom-10 left-4 z-10 w-44">
              <TeamCard {...team[0]} />
            </div>
            <div className="absolute -bottom-10 right-4 z-10 w-44">
              <TeamCard {...team[1]} />
            </div>
          </div>
        </div>

        {/* ── Mobile team cards ──────────────────────── */}
        <div className="mt-10 grid grid-cols-3 gap-3 lg:hidden">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        {/* ── Values section ─────────────────────────── */}
        <div className="mt-24 text-center lg:mt-32">
          <span className="text-label text-brand-primary inline-flex items-center gap-2">
            <span className="bg-brand-primary inline-block h-2 w-2 rounded-full" />
            How We Work
          </span>

          <Heading as="h3" variant="lg" className="mt-3">
            Our Core Values
          </Heading>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-5">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className={cn(
                "rounded-[var(--radius-md)] border border-border-light",
                "bg-background-surface p-5 shadow-sm",
                "transition-all duration-300 ease-[var(--ease-default)]",
                "hover:-translate-y-1 hover:shadow-md",
              )}
            >
              <span className="bg-brand-primary/10 grid h-10 w-10 place-items-center rounded-full">
                <Icon className="text-brand-primary h-5 w-5" aria-hidden />
              </span>

              <p className="text-body-sm text-text-primary mt-4 font-semibold">{title}</p>
              <Text variant="caption" className="mt-1.5">
                {description}
              </Text>
            </div>
          ))}
        </div>

        {/* ── Stats row ──────────────────────────────── */}
        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-5">
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
                <p className="text-body-sm text-text-primary mt-0.5 font-semibold">{label}</p>
                <p className="text-caption text-text-muted mt-1">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ──────────────────────────────────────────────────────────
   TeamCard — reused in both desktop overlay and mobile grid
   ────────────────────────────────────────────────────────── */

function TeamCard({
  name,
  role,
  image,
  icon: Icon,
}: (typeof team)[number]) {
  return (
    <div className="glass overflow-hidden rounded-[var(--radius-sm)] p-2.5 shadow-md">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${name}, ${role} at NorthPeak Digital`}
          fill
          sizes="(min-width: 1024px) 200px, 30vw"
          className="object-cover"
        />
        <span className="bg-brand-primary absolute top-2 left-2 grid h-7 w-7 place-items-center rounded-lg">
          <Icon className="h-3.5 w-3.5 text-white" aria-hidden />
        </span>
      </div>
      <p className="text-body-sm text-text-primary mt-2 font-semibold">{name}</p>
      <p className="text-caption text-brand-primary font-medium">{role}</p>
    </div>
  );
}
