# 🏔️ North Peak Digital

A state-of-the-art, high-performance web platform for **North Peak Digital** — a digital agency specializing in design, engineering, and digital transformation. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Motion.

---

## 🌟 Overview

North Peak Digital is designed with a premium, dark-mode aesthetic featuring rich micro-animations, dynamic glassmorphism UI elements, and interactive components. The platform is optimized for **Core Web Vitals**, fast load times (~107 kB first load JS), accessibility, and search engine discoverability.

For detailed technical performance optimizations, refer to the [`OPTIMIZATION_CHANGELOG.md`](file:///Users/taruns117/Documents/north-peak/OPTIMIZATION_CHANGELOG.md).

---

## ✨ Features & Sections

- 🚀 **Hero Section**: High-impact value proposition with preloaded vector graphics and sub-second Largest Contentful Paint (LCP).
- 🛠️ **Services Showcase**: Interactive grid detailing core offerings (Brand Strategy, Custom Web/Mobile Development, UI/UX Design, Cloud & DevOps).
- 💼 **Featured Work**: Portfolio showcase of client case studies with filterable categories and hover micro-animations.
- 📈 **About & Performance Metrics**: Company vision, team values, and real-time counter statistics.
- 💳 **Pricing & Plans**: Interactive tier toggle (Monthly vs. Annual billing) with custom plan calculators.
- 💬 **Testimonials Carousel**: Fluid customer testimonials carousel driven by Motion (Framer Motion).
- 📰 **Insights & Articles**: Categorized article listings with filter tabs and search capabilities.
- 📬 **Interactive Contact Page**: Multi-step contact form with real-time validation and clean layout fallback views.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/postcss`, `clsx`, `tailwind-merge` |
| **Animations** | [Motion 12](https://motion.dev/) (Framer Motion) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Self-hosted `Geist` (Sans) & `Fraunces` (Serif Display) via `next/font` |
| **Code Formatting & Linting** | [ESLint 9](https://eslint.org/), [Prettier 3](https://prettier.io/) with `prettier-plugin-tailwindcss` |

---

## ⚡ Performance & SEO Architecture

- **React Server Components (RSC)**: Server-first architecture keeps client bundle size minimal.
- **Zero CLS Font Delivery**: Fonts self-hosted at build time via `next/font/google` with `display: swap`.
- **Image Optimization**: Pre-configured AVIF & WebP modern format conversion in `next.config.ts`.
- **Security Headers**: Standard HTTP security headers (`Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy`).
- **Structured Data (SEO)**: Built-in `Organization` and `WebSite` JSON-LD schema markup, dynamic `sitemap.ts`, `robots.ts`, and `manifest.ts`.

---

## 📁 Project Structure

```
north-peak/
├── app/                      # Next.js 16 App Router pages & layouts
│   ├── contact/              # Contact page route
│   ├── layout.tsx            # Root layout with font declarations & SEO metadata
│   ├── page.tsx              # Home page combining main sections
│   ├── globals.css           # Global Tailwind CSS v4 imports & theme styles
│   ├── robots.ts             # Dynamic robots.txt handler
│   ├── sitemap.ts            # Dynamic sitemap.xml handler
│   ├── manifest.ts           # Web app manifest handler
│   └── error.tsx / global-error.tsx # Error boundary pages
├── components/               # UI & section components
│   ├── layout/               # Header, Navbar, Footer
│   ├── sections/             # Page sections (Hero, Services, Work, Pricing, etc.)
│   ├── ui/                   # Reusable UI primitives (Buttons, Cards, Badges)
│   ├── forms/                # Contact and lead forms
│   ├── providers/            # React context providers
│   └── seo/                  # JSON-LD structured data components
├── hooks/                    # Custom React hooks
├── lib/                      # Helper utilities & constants
├── public/                   # Static media assets & icons
└── types/                    # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **npm** / **pnpm** / **yarn** / **bun**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/north-peak.git
   cd north-peak
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server on `http://localhost:3000`. |
| `npm run build` | Compiles the production build for deployment. |
| `npm run start` | Runs the compiled Next.js production server. |
| `npm run lint` | Evaluates code quality using ESLint. |
| `npm run format` | Automatically formats codebase files with Prettier. |

---

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy North Peak Digital is using the [Vercel Platform](https://vercel.com/new):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the repository in Vercel.
3. Vercel will automatically detect Next.js and apply optimum build settings.
4. Click **Deploy**.

---

## 📄 License

This project is proprietary software belonging to North Peak Digital. All rights reserved.
