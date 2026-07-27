"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ChevronRight, X } from "lucide-react";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { socialLinks } from "./socials";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-background-inverse text-text-inverse fixed inset-0 z-50 flex flex-col lg:hidden"
        >
          <div className="flex h-18 items-center justify-between px-5">
            <Logo invert />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="text-text-inverse grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-4 rounded-lg px-4 py-4 text-body-md font-medium transition-colors",
                        active
                          ? "border-brand-primary/40 bg-brand-primary/15 text-text-inverse border"
                          : "text-white/80 hover:bg-white/5",
                      )}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      <span className="flex-1">{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-white/40" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              onClick={onClose}
              className="mt-6 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <span className="bg-brand-gradient grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                <ArrowUpRight className="h-5 w-5" />
              </span>
              <span className="flex-1 text-body-sm font-medium">
                Let&apos;s build something amazing together
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-white/60" />
            </Link>
          </nav>

          <div className="flex items-center justify-center gap-4 px-5 py-6">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
