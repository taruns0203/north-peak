"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="h-10 flex-1 bg-transparent px-4 text-body-sm text-white placeholder:text-white/40 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-brand-primary hover:bg-brand-primary-hover flex h-10 shrink-0 items-center gap-1.5 rounded-full px-5 text-body-sm font-medium text-white transition-colors"
      >
        Subscribe
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
