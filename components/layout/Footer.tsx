import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/lib/navigation";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { socialLinks } from "./socials";

const contactDetails = [
  { icon: MapPin, lines: ["123 Innovation Drive", "San Francisco, CA 94107"] },
  { icon: Mail, lines: ["hello@northpeak.digital"] },
  { icon: Phone, lines: ["+1 (415) 555-0198"] },
];

export function Footer() {
  return (
    <footer className="bg-background-inverse relative mt-24 overflow-hidden rounded-t-[2.5rem] text-white/70">
      <div className="bg-brand-gradient absolute inset-x-0 top-0 h-px" />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Logo invert />
            <p className="text-body-sm max-w-xs">
              We help ambitious brands scale with strategy, design and technology
              that drives measurable growth.
            </p>
            <ul className="space-y-4">
              {contactDetails.map(({ icon: Icon, lines }) => (
                <li key={lines[0]} className="flex items-start gap-3">
                  <Icon className="text-brand-secondary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-body-sm">
                    {lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-label text-brand-secondary mb-5">{column.title}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group text-body-sm flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                    >
                      <ChevronRight className="text-brand-primary h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-3 lg:items-center lg:divide-x lg:divide-white/10">
          <Link
            href="/contact"
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 lg:mr-8"
          >
            <span className="bg-brand-gradient grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
              <ArrowUpRight className="h-5 w-5" />
            </span>
            <span className="text-body-sm flex-1 font-medium text-white">
              Let&apos;s build something amazing together
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-white/60" />
          </Link>

          <div className="flex items-center gap-4 lg:px-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-heading-sm text-white">Stay updated</h2>
              <p className="text-body-sm">
                Subscribe to our newsletter for insights, ideas and industry trends.
              </p>
            </div>
          </div>

          <div className="lg:pl-8">
            <NewsletterForm />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-6 py-6 text-body-sm md:flex-row md:justify-between">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>&copy; 2025 NorthPeak Digital. All rights reserved.</p>
            <p className="text-caption text-white/60">
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-white"
              >
                Built for Digital Heroes Training Task
              </a>
            </p>
          </div>
          <p className="flex items-center gap-2">
            <ShieldCheck className="text-brand-secondary h-4 w-4" />
            Trusted by 200+ businesses worldwide.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
