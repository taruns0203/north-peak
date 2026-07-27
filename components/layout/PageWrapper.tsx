import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background-surface focus:px-4 focus:py-2 focus:text-body-sm focus:text-text-primary focus:shadow-md focus:ring-2 focus:ring-border-focus"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}