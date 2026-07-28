# Optimization Changelog — NorthPeak Digital

This document tracks all technical performance, accessibility, Core Web Vitals, and SEO optimizations implemented in the codebase.

---

## ⚡ 1. Largest Contentful Paint (LCP) & Resource Discovery

### **LCP Image Preloading & Prioritization**
* **File**: [`components/sections/HeroIllustration.tsx`](file:///Users/taruns117/Documents//components/sections/HeroIllustration.tsx#L20-L39)
* **Problem**: Lighthouse flagged `hero-halo.png` and hero vector assets as delayed LCP elements due to lack of early HTML discoverability and implicit lazy-loading.
* **Optimization**:
  * **`fetchPriority="high"`**: Instructs the browser parser to immediately allocate top network priority to LCP image downloads during initial HTML stream processing.
  * **`loading="eager"`**: Prevents native browser lazy-loading overhead on critical initial viewport images.
  * **`sizes="(min-width: 1024px) 60vw, 100vw"`**: Provides explicit display dimension hints so the preloader can pick the correct image resolution from `srcset` without waiting for CSS box calculation.
  * **`priority`**: Automatically generates `<link rel="preload">` tags in the document `<head>`.

---

## 🎨 2. Font Loading & Zero Cumulative Layout Shift (CLS)

### **Self-Hosted Google Fonts with `next/font`**
* **File**: [`app/layout.tsx`](file:///Users/taruns117/Documents//app/layout.tsx#L9-L20)
* **Optimization**:
  * Configured `Geist` (Sans-Serif) and `Fraunces` (Serif Display) via `next/font/google`.
  * **Zero External Network Overhead**: Next.js automatically self-hosts font binaries at build time, eliminating third-party requests to `fonts.googleapis.com` or `fonts.gstatic.com`.
  * **`display: "swap"` & Latin Subsetting**: Guarantees fast visual display of text without Flash of Unstyled Text (FOUT) or layout jumps (CLS = 0).

---

## 🚀 3. Server-First Architecture (React Server Components)

### **Bundle Size & Execution Optimization**
* **Files**: [`app/page.tsx`](file:///Users/taruns117/Documents//app/page.tsx), [`components/sections/*`](file:///Users/taruns117/Documents//components/sections/)
* **Optimization**:
  * Built using **Next.js 16 (App Router)** and **React 19**.
  * Sections (`Hero`, `Services`, `Work`, `About`, `Pricing`, `Testimonials`, `Insights`) are rendered on the server as **React Server Components (RSC)**.
  * `"use client"` is strictly restricted to interactive client nodes, keeping the overall shared JavaScript payload tiny (~107 kB first load JS).

---

## 🎨 4. Modern CSS & Next-Gen Image Formats

### **Tailwind CSS v4 & Image Formats**
* **Files**: [`next.config.ts`](file:///Users/taruns117/Documents//next.config.ts), [`app/globals.css`](file:///Users/taruns117/Documents//app/globals.css)
* **Optimization**:
  * **Tailwind CSS v4 Engine**: Purges unused utility styles at compile time for minimal output CSS.
  * **AVIF & WebP Image Support**: Enabled `formats: ["image/avif", "image/webp"]` in `next.config.ts` for automatic image compression.
  * **Inline Vector SVGs**: Used inline vector graphics for hero visual layers instead of heavy bitmapped pixel images.

---

## 🔒 5. Security & HTTP Header Performance

### **Security Headers & DNS Prefetching**
* **File**: [`next.config.ts`](file:///Users/taruns117/Documents//next.config.ts#L3-L28)
* **Optimization**:
  * Injected security headers (`X-DNS-Prefetch-Control: on`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Permissions-Policy`).

---

## 🔍 6. SEO & Structured Data

### **Metadata & Indexing**
* **Files**: [`app/layout.tsx`](file:///Users/taruns117/Documents//app/layout.tsx), [`app/robots.ts`](file:///Users/taruns117/Documents//app/robots.ts), [`app/sitemap.ts`](file:///Users/taruns117/Documents//app/sitemap.ts), [`components/seo/JsonLd.tsx`](file:///Users/taruns117/Documents//components/seo/JsonLd.tsx)
* **Optimization**:
  * Full metadata coverage (OpenGraph, Twitter Cards, canonical URL).
  * Dynamic `sitemap.xml` and `robots.txt` generation.
  * Embedded JSON-LD schema markup (`Organization`, `WebSite`) for rich snippet search results.
