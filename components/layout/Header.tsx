"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowRight, Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { direction, atTop } = useScrollDirection();
  const pathname = usePathname();
  const hidden = direction === "down" && !atTop && !menuOpen;

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        atTop ? "bg-transparent" : "glass border-b border-border-default shadow-sm",
      )}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-body-sm font-medium transition-colors hover:text-text-primary",
                    active ? "text-text-primary" : "text-text-secondary",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="bg-brand-primary absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Button
            href="/contact"
            trailingIcon={<ArrowRight className="h-4 w-4" />}
            className="hidden lg:inline-flex"
          >
            Let&apos;s Talk
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="border-border-default bg-background-surface text-text-primary hover:bg-background-secondary focus-visible:ring-border-focus grid h-11 w-11 place-items-center rounded-md border shadow-sm transition-colors focus-visible:ring-2 focus-visible:outline-none lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </motion.header>
  );
}
