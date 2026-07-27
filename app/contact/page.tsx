import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Calendar,
  ChevronRight,
  Clock,
  Mail,
  PhoneCall,
  Rocket,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a project in mind or want to explore how NorthPeak Digital can help your business grow? Get in touch with our team today.",
  openGraph: {
    title: "Contact Us — NorthPeak Digital",
    description:
      "Let's build something exceptional together. Get in touch with our strategy, design, and engineering experts.",
  },
};

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@northpeak.digital",
    href: "mailto:hello@northpeak.digital",
  },
  {
    icon: PhoneCall,
    title: "Call Us",
    detail: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Building2,
    title: "Visit Our Office",
    detail: "23, Innovation Drive, Sector 62, Noida, Uttar Pradesh 201301",
    href: "https://maps.google.com",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    detail: "Book a free 30-min discovery call",
    href: "https://calendly.com",
  },
];

export default function ContactPage() {
  return (
    <Section className="relative overflow-hidden pt-8">
      {/* Background ambient purple glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/10 blur-3xl"
      />

      <Container wide>
        {/* Intro */}
        <div className="max-w-2xl">
          <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-label inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Let&apos;s Work Together
          </span>

          <Heading as="h1" variant="hero" className="mt-4">
            Let&rsquo;s build something <br />
            exceptional <span className="text-gradient">together.</span>
          </Heading>

          <Text variant="body-lg" className="mt-4 max-w-lg">
            Have a project in mind or want to explore how we can help your business
            grow? We&rsquo;d love to hear from you.
          </Text>

          {/* Response time pill */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-border-light bg-background-surface px-4 py-2 shadow-sm">
              <span className="bg-brand-primary/10 text-brand-primary grid h-8 w-8 place-items-center rounded-full">
                <Clock className="h-4 w-4" />
              </span>
              <p className="text-caption text-text-muted">
                We respond within{" "}
                <span className="text-brand-primary font-bold">24 Hours</span>
              </p>
            </div>

            <div className="hidden items-center gap-2 text-caption text-text-muted sm:flex">
              <div className="flex -space-x-2">
                <div className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-background-surface">
                  <Image src="/images/about/arjun.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-background-surface">
                  <Image src="/images/about/neha.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-background-surface">
                  <Image src="/images/about/rohan.jpg" alt="" fill className="object-cover" />
                </div>
              </div>
              <span>Trusted by 100+ brands worldwide</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Contact Info + Center Form + Right Illustration */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* Left Column: Contact Cards */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            {contactCards.map(({ icon: Icon, title, detail, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-[var(--radius-md)] border border-border-light bg-background-surface p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <span className="bg-brand-primary/10 text-brand-primary grid h-10 w-10 shrink-0 place-items-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-body-sm font-semibold text-text-primary">
                      {title}
                    </p>
                    <p className="text-caption text-text-muted mt-0.5 max-w-[180px] truncate">
                      {detail}
                    </p>
                  </div>
                </div>
                <ChevronRight className="text-text-muted h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          {/* Center Column: Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          {/* Right Column: 3D Illustration & Callout */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-border-light shadow-sm">
              <Image
                src="/images/contact/contact-illustration.jpg"
                alt="NorthPeak Digital consultation team discussing digital project"
                fill
                priority
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="glass rounded-[var(--radius-md)] p-6 shadow-sm">
              <span className="bg-brand-primary/10 text-brand-primary grid h-10 w-10 place-items-center rounded-xl">
                <Rocket className="h-5 w-5" />
              </span>
              <h3 className="text-heading-sm mt-4 font-semibold text-text-primary">
                Ready to start your project?
              </h3>
              <p className="text-caption text-text-muted mt-2">
                Book a free consultation call and let&rsquo;s discuss how we can bring your
                ideas to life.
              </p>
              <Button
                href="https://calendly.com"
                variant="outline"
                size="sm"
                trailingIcon={<ArrowRight className="h-4 w-4" />}
                className="mt-4 w-full"
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Call Consultation Banner */}
        <div className="mt-16 rounded-[var(--radius-md)] bg-brand-gradient p-6 text-white shadow-lg md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/20">
                <PhoneCall className="h-6 w-6 text-white" />
              </span>
              <div>
                <h3 className="text-heading-md font-bold text-white">
                  Book a Free Consultation Call
                </h3>
                <p className="text-body-sm text-white/80">
                  Let&rsquo;s discuss your project goals, timelines, and strategy.
                </p>
              </div>
            </div>

            <Button
              href="https://calendly.com"
              variant="secondary"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
