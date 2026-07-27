import { Quote, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { TestimonialCarousel, LogoCarousel } from "./TestimonialCarousel";

/* ──────────────────────────────────────────────────────────
   Brand Logos (SVG Components)
   ────────────────────────────────────────────────────────── */

function VertexLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-bold tracking-tight text-text-primary", className)}>
      <svg className="h-6 w-6 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
        <path d="M12 11l3.5 7h-7L12 11z" opacity="0.6" />
      </svg>
      <span className="text-sm uppercase tracking-wider">vertex <span className="block text-[9px] font-normal tracking-widest text-text-muted">LABS</span></span>
    </div>
  );
}

function NovaLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-bold text-text-primary", className)}>
      <div className="bg-brand-primary flex h-6 w-6 items-center justify-center rounded text-xs text-white">N</div>
      <span className="text-sm font-extrabold uppercase tracking-wider">NOVA <span className="block text-[8px] font-medium text-text-muted">COMMERCE</span></span>
    </div>
  );
}

function FlowbaseLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-bold text-text-primary", className)}>
      <svg className="h-6 w-6 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h16v4H4V4zm0 6h12v4H4v-4zm0 6h8v4H4v-4z" />
      </svg>
      <span className="text-sm font-black uppercase tracking-wider">FLOWBASE</span>
    </div>
  );
}

function LuminexLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-bold text-text-primary", className)}>
      <svg className="h-6 w-6 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 2h2v8h8v2h-8v8h-2v-8H3v-2h8V2z" />
      </svg>
      <span className="text-sm uppercase tracking-wider">LUMINEX <span className="block text-[8px] font-medium text-text-muted">HEALTH</span></span>
    </div>
  );
}

function CloudoraLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-medium text-text-primary", className)}>
      <svg className="h-6 w-6 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1564 20.206 10.2315 17.9 10.0243C17.4042 6.5779 14.4172 4 10.8 4C6.82355 4 3.6 7.22355 3.6 11.2C3.6 11.6033 3.63319 12.0007 3.6974 12.3892C2.12061 13.1611 1 14.7709 1 16.6C1 19.0301 2.96995 21 5.4 21H17.5z" />
      </svg>
      <span className="text-sm font-bold tracking-tight">CLOUDORA</span>
    </div>
  );
}

function DatawiseLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-semibold text-text-muted", className)}>
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 19h4v-7H4v7zm6 0h4V5h-4v14zm6 0h4v-11h-4v11z" />
      </svg>
      <span className="text-sm font-bold tracking-tight">Datawise</span>
    </div>
  );
}

function BrightscoutLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-semibold text-text-muted", className)}>
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="text-sm font-bold">Brightscout</span>
    </div>
  );
}

function PaytureLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-sans font-semibold text-text-muted", className)}>
      <span className="bg-text-primary text-background-surface rounded-full px-2 py-0.5 text-xs font-black">P</span>
      <span className="text-sm font-bold">Payture</span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Testimonial Data
   ────────────────────────────────────────────────────────── */

const featuredTestimonial = {
  quote:
    "NorthPeak Digital transformed our online presence and helped us increase qualified leads by 150% in just three months.",
  author: "Alex Morgan",
  role: "CEO, Vertex Labs",
  avatar: "/images/about/arjun.jpg",
  logo: VertexLogo,
  highlightText: "150%",
};

const secondaryTestimonials = [
  {
    quote: "Their attention to detail and ability to understand our vision is unmatched.",
    author: "Priya Sharma",
    role: "Marketing Head, NovaCommerce",
    avatar: "/images/about/neha.jpg",
    logo: NovaLogo,
  },
  {
    quote: "Professional, responsive, and results-driven. Our go-to digital partner.",
    author: "Daniel Brooks",
    role: "Co-founder, Flowbase",
    avatar: "/images/about/rohan.jpg",
    logo: FlowbaseLogo,
  },
  {
    quote: "The new website not only looks great but also converted way better. Fantastic team!",
    author: "Sophia Bennett",
    role: "Head of Growth, Luminex Health",
    avatar: "/images/about/neha.jpg",
    logo: LuminexLogo,
  },
  {
    quote: "They delivered beyond expectations and continue to support our growth journey.",
    author: "Arjun Patel",
    role: "CTO, Cloudora",
    avatar: "/images/about/arjun.jpg",
    logo: CloudoraLogo,
  },
];

/* ──────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────── */

export function Testimonials() {
  return (
    <Section aria-labelledby="testimonials-heading" className="relative overflow-hidden">
      {/* Background purple mesh gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/3 left-0 -z-10 h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl"
      />

      <Container wide>
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-label inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Testimonials
          </span>

          <Heading as="h2" variant="section" id="testimonials-heading" className="mt-6">
            Loved by businesses. <br />
            Trusted to deliver <span className="text-gradient">results.</span>
          </Heading>

          <Text variant="body-lg" className="mt-4">
            We partner with ambitious brands and startups to build digital experiences
            that drive real growth.
          </Text>
        </div>

        {/* Featured Hero Testimonial Card */}
        <div className="relative mt-12 lg:mt-16">
          <FeaturedCard />
        </div>

        {/* Secondary Testimonials Cards (Grid on Desktop, Stack on Mobile) */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {secondaryTestimonials.map((t) => (
            <SecondaryCard key={t.author} testimonial={t} />
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-16 pt-8 border-t border-border-light text-center lg:mt-24">
          <p className="text-label text-text-muted tracking-widest uppercase">
            Trusted by Innovative Companies
          </p>

          <div className="mt-8 hidden flex-wrap items-center justify-between gap-8 md:flex">
            <VertexLogo className="opacity-70 transition-opacity hover:opacity-100" />
            <NovaLogo className="opacity-70 transition-opacity hover:opacity-100" />
            <FlowbaseLogo className="opacity-70 transition-opacity hover:opacity-100" />
            <LuminexLogo className="opacity-70 transition-opacity hover:opacity-100" />
            <CloudoraLogo className="opacity-70 transition-opacity hover:opacity-100" />
            <DatawiseLogo className="opacity-70 transition-opacity hover:opacity-100" />
            <BrightscoutLogo className="opacity-70 transition-opacity hover:opacity-100" />
            <PaytureLogo className="opacity-70 transition-opacity hover:opacity-100" />
          </div>

          <div className="mt-6 md:hidden">
            <LogoCarousel>
              <VertexLogo />
              <NovaLogo />
              <FlowbaseLogo />
              <LuminexLogo />
              <CloudoraLogo />
              <DatawiseLogo />
              <BrightscoutLogo />
              <PaytureLogo />
            </LogoCarousel>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ──────────────────────────────────────────────────────────
   FeaturedCard (Hero Testimonial Card)
   ────────────────────────────────────────────────────────── */

function FeaturedCard() {
  const { quote, author, role, avatar, logo: Logo, highlightText } = featuredTestimonial;

  const parts = quote.split(highlightText);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-md)] border border-border-light",
        "bg-background-surface p-6 shadow-md md:p-10 lg:p-12",
      )}
    >
      {/* Background glow & large quote accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-brand-primary/10 blur-2xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-8 top-6 select-none text-8xl font-serif text-brand-primary/10 lg:right-16 lg:top-8 lg:text-9xl"
      >
        ”
      </span>

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          {/* Quote icon & stars */}
          <div className="flex items-center justify-between">
            <span className="bg-brand-primary/10 text-brand-primary grid h-10 w-10 place-items-center rounded-full">
              <Quote className="h-5 w-5 fill-brand-primary text-brand-primary" />
            </span>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-primary text-brand-primary" />
              ))}
            </div>
          </div>

          {/* Quote Text */}
          <p className="text-heading-md lg:text-heading-lg mt-6 font-serif leading-relaxed text-text-primary">
            {parts[0]}
            <span className="text-brand-primary font-bold">{highlightText}</span>
            {parts[1]}
          </p>

          {/* Author Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border-light pt-6">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-brand-primary/20">
              <Image src={avatar} alt={author} fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <p className="text-body-sm font-semibold text-text-primary">{author}</p>
              <p className="text-caption text-text-muted">{role}</p>
            </div>

            <div className="hidden h-8 w-px bg-border-default sm:block" />

            <div className="sm:ml-auto">
              <Logo />
            </div>
          </div>
        </div>

        {/* Visual card decoration column for wide screens */}
        <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
          <div className="glass flex flex-col items-center justify-center rounded-[var(--radius-md)] p-8 text-center shadow-sm">
            <div className="flex gap-1 text-brand-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-primary" />
              ))}
            </div>
            <p className="mt-4 font-serif text-lg font-medium text-text-primary">
              &ldquo;Transformational impact on lead growth.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   SecondaryCard
   ────────────────────────────────────────────────────────── */

function SecondaryCard({
  testimonial,
}: {
  testimonial: (typeof secondaryTestimonials)[number];
}) {
  const { quote, author, role, avatar, logo: Logo } = testimonial;

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-[var(--radius-md)] border border-border-light",
        "bg-background-surface p-6 shadow-sm",
        "transition-all duration-300 ease-[var(--ease-default)]",
        "hover:-translate-y-1 hover:shadow-md",
      )}
    >
      <div>
        <span className="text-brand-primary inline-block">
          <Quote className="h-5 w-5 fill-brand-primary/20 text-brand-primary" />
        </span>
        <p className="text-body-sm mt-3 font-serif italic text-text-primary">&ldquo;{quote}&rdquo;</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border-light pt-4">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image src={avatar} alt={author} fill sizes="36px" className="object-cover" />
          </div>
          <div>
            <p className="text-caption font-semibold text-text-primary">{author}</p>
            <p className="text-[11px] text-text-muted">{role}</p>
          </div>
        </div>

        <div className="shrink-0 scale-90">
          <Logo />
        </div>
      </div>
    </div>
  );
}
