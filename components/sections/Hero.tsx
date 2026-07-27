import {
  ArrowRight,
  Briefcase,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "./HeroIllustration";
import { StatCard, heroStats } from "./StatCard";

const features = [
  {
    icon: Rocket,
    title: "Growth Focused",
    description: "Everything we do is built for measurable business impact.",
  },
  {
    icon: Sparkles,
    title: "Modern Approach",
    description: "Cutting-edge design and development with future in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    description: "Transparent process, reliable support and long-term partnership.",
  },
];

export function Hero() {
  return (
    <Section className="relative overflow-hidden">
      <Container>
        {/* Two-column hero grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left — Copy */}
          <div className="animate-fade-up flex flex-col">
            <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-label inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Growth Partner
            </span>

            <Heading as="h1" variant="hero" className="mt-6">
              Digital Solutions That Drive{" "}
              <span className="text-gradient">Real Growth</span>
            </Heading>

            <Text variant="body-lg" className="mt-6 max-w-md">
              We help ambitious brands scale with strategy, design and technology
              that delivers measurable results.
            </Text>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/services"
                size="lg"
                trailingIcon={<ArrowRight className="h-5 w-5" />}
                className="bg-brand-gradient w-full sm:w-auto lg:bg-none"
              >
                Explore Services
              </Button>
              <Button
                href="/work"
                variant="secondary"
                size="lg"
                trailingIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right — Illustration (allowed to overflow for editorial feel) */}
          <div className="relative lg:-mr-8 xl:-mr-16">
            <HeroIllustration />
          </div>
        </div>

        {/* Trust features row — sits below both columns */}
        <ul className="mt-12 hidden gap-6 lg:mt-16 lg:grid lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex gap-3">
              <span className="bg-brand-primary/10 mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full">
                <Icon className="text-brand-primary h-4 w-4" />
              </span>
              <div>
                <Text as="h2" variant="body-sm" tone="primary" className="font-semibold">
                  {title}
                </Text>
                <Text variant="caption" tone="muted" className="mt-1">
                  {description}
                </Text>
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile stat cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {heroStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
