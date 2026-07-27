import { ArrowRight, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { InsightFilterTabs } from "./InsightFilterTabs";

/* ──────────────────────────────────────────────────────────
   Article Data
   ────────────────────────────────────────────────────────── */

const featuredArticle = {
  slug: "future-of-digital-experience-2025",
  title: "The Future of Digital Experience: Trends Shaping 2025 and Beyond",
  excerpt:
    "Explore the key shifts in user behavior, emerging technologies, and design strategies that will define exceptional digital experiences.",
  category: "Strategy",
  readTime: "8 min read",
  author: "Arjun Patel",
  authorAvatar: "/images/about/arjun.jpg",
  date: "May 14, 2025",
  image: "/images/insights/featured-trends.jpg",
};

const secondaryArticles = [
  {
    slug: "scaling-modern-saas-platforms",
    title: "Scaling Modern SaaS Platforms: Architecture Best Practices",
    category: "Development",
    readTime: "6 min read",
    date: "May 10, 2025",
    image: "/images/insights/saas-architecture.jpg",
  },
  {
    slug: "design-systems-drive-consistency-growth",
    title: "Design Systems that Drive Consistency and Growth",
    category: "Design",
    readTime: "5 min read",
    date: "May 6, 2025",
    image: "/images/insights/design-systems.jpg",
  },
  {
    slug: "conversion-focused-websites-moves-needle",
    title: "Conversion-Focused Websites: What Actually Moves the Needle",
    category: "Growth",
    readTime: "7 min read",
    date: "May 2, 2025",
    image: "/images/insights/conversion-rocket.jpg",
  },
];

/* ──────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────── */

export function Insights() {
  return (
    <Section aria-labelledby="insights-heading" className="relative overflow-hidden">
      {/* Background purple glow elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-10 -z-10 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-brand-secondary/10 blur-3xl"
      />

      <Container wide>
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-label inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Insights
          </span>

          <Heading as="h2" variant="section" id="insights-heading" className="mt-6">
            Insights that drive <br />
            better <span className="text-gradient">digital outcomes.</span>
          </Heading>

          <Text variant="body-lg" className="mt-4">
            Actionable perspectives, expert strategies, and the latest trends in design,
            development, and growth.
          </Text>
        </div>

        {/* Category filter tabs */}
        <InsightFilterTabs />

        {/* Featured Article Card */}
        <div className="mt-10 lg:mt-12">
          <FeaturedArticleCard />
        </div>

        {/* Secondary Articles Stack */}
        <div className="mt-6 flex flex-col gap-4">
          {secondaryArticles.map((article) => (
            <SecondaryArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <Button
            href="/insights"
            variant="outline"
            size="lg"
            trailingIcon={<ArrowRight className="h-5 w-5" />}
            className="w-full sm:w-auto"
          >
            View all articles
          </Button>
        </div>
      </Container>
    </Section>
  );
}

/* ──────────────────────────────────────────────────────────
   FeaturedArticleCard
   ────────────────────────────────────────────────────────── */

function FeaturedArticleCard() {
  const { title, excerpt, category, readTime, author, authorAvatar, date, image, slug } =
    featuredArticle;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-md)] border border-border-light",
        "bg-background-surface shadow-sm transition-all duration-300 ease-[var(--ease-default)]",
        "hover:-translate-y-1 hover:shadow-md",
      )}
    >
      <Link href={`/insights/${slug}`} className="block">
        {/* Cover Image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[2.4/1]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="p-6 md:p-8 lg:p-10">
          {/* Top badges & read time */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="bg-brand-primary/10 text-brand-primary rounded-full px-3 py-1 text-xs font-semibold">
                {category}
              </span>
              <span className="bg-brand-primary/10 text-brand-primary inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold">
                <Sparkles className="h-3 w-3" />
                Featured Article
              </span>
            </div>

            <span className="text-caption text-text-muted flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>

          {/* Heading */}
          <Heading
            as="h3"
            variant="md"
            className="text-heading-md lg:text-heading-lg mt-4 font-serif transition-colors group-hover:text-brand-primary"
          >
            {title}
          </Heading>

          {/* Excerpt */}
          <Text variant="body-md" className="mt-3 max-w-3xl text-text-secondary">
            {excerpt}
          </Text>

          {/* Author & Action */}
          <div className="mt-8 flex items-center justify-between border-t border-border-light pt-6">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border-default">
                <Image src={authorAvatar} alt={author} fill className="object-cover" />
              </div>
              <div>
                <p className="text-body-sm font-semibold text-text-primary">{author}</p>
                <p className="text-caption text-text-muted">
                  {date} &bull; {readTime}
                </p>
              </div>
            </div>

            <span className="bg-brand-primary/10 text-brand-primary grid h-10 w-10 place-items-center rounded-full transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────
   SecondaryArticleCard
   ────────────────────────────────────────────────────────── */

function SecondaryArticleCard({
  article,
}: {
  article: (typeof secondaryArticles)[number];
}) {
  const { title, category, readTime, date, image, slug } = article;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-md)] border border-border-light",
        "bg-background-surface p-4 shadow-sm transition-all duration-300 ease-[var(--ease-default)] sm:p-5",
        "hover:-translate-y-0.5 hover:shadow-md",
      )}
    >
      <Link href={`/insights/${slug}`} className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[var(--radius-sm)] sm:w-48 lg:w-56">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="bg-brand-primary/10 text-brand-primary rounded-full px-2.5 py-0.5 text-xs font-semibold">
                {category}
              </span>

              <span className="text-caption text-text-muted flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {readTime}
              </span>
            </div>

            <Heading
              as="h3"
              variant="sm"
              className="text-heading-sm mt-2.5 font-serif transition-colors group-hover:text-brand-primary"
            >
              {title}
            </Heading>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-caption text-text-muted">{date}</span>
            <ArrowRight className="text-brand-primary h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
