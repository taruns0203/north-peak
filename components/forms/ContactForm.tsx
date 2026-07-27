"use client";

import { useState, type FormEvent } from "react";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Coins,
  Layers,
  Lock,
  Mail,
  Send,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
  referral: string;
};

type ErrorsState = Partial<Record<keyof FormState, string>>;

const projectTypes = [
  "Web Development",
  "UI/UX Design",
  "Brand Strategy",
  "Digital Marketing",
  "Full Service / Multiple",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

const timelines = [
  "Under 1 Month",
  "1 - 3 Months",
  "3 - 6 Months",
  "Flexible / Ongoing",
];

const referralSources = [
  "Google Search",
  "Social Media (LinkedIn / Twitter)",
  "Recommendation / Referral",
  "Previous Client",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    details: "",
    referral: "",
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: ErrorsState = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Project details are required";
    } else if (formData.details.trim().length < 10) {
      newErrors.details = "Please share a bit more detail (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[var(--radius-md)] border border-border-light bg-background-surface p-8 text-center shadow-md md:p-12">
        <div className="bg-brand-primary/10 text-brand-primary mx-auto grid h-16 w-16 place-items-center rounded-full">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h3 className="text-heading-md mt-6 font-semibold text-text-primary">
          Message Sent Successfully!
        </h3>

        <p className="text-body-md mt-3 max-w-md text-text-secondary">
          Thank you for reaching out, <strong className="text-text-primary">{formData.name}</strong>.
          Our team will review your project details and get back to you within 24 hours.
        </p>

        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              projectType: "",
              budget: "",
              timeline: "",
              details: "",
              referral: "",
            });
          }}
          className="mt-8"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-md)] border border-border-light bg-background-surface p-6 shadow-md md:p-8">
      <div className="flex items-center justify-between border-b border-border-light pb-5">
        <h3 className="text-heading-md font-semibold text-text-primary">
          Send us a message
        </h3>
        <span className="bg-brand-primary/10 text-brand-primary grid h-9 w-9 place-items-center rounded-full">
          <Send className="h-4 w-4" />
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-5">
        {/* Name & Email Row */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-body-sm font-medium text-text-primary">
              Full Name <span className="text-brand-primary">*</span>
            </label>
            <div className="relative mt-1.5">
              <User className="text-text-muted absolute top-3.5 left-3.5 h-4 w-4" />
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                className={cn(
                  "w-full rounded-xl border bg-background-primary py-3 pr-4 pl-10 text-body-sm text-text-primary",
                  "transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
                  errors.name ? "border-danger" : "border-border-default",
                )}
              />
            </div>
            {errors.name && (
              <p className="text-caption mt-1 text-danger">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-body-sm font-medium text-text-primary">
              Work Email <span className="text-brand-primary">*</span>
            </label>
            <div className="relative mt-1.5">
              <Mail className="text-text-muted absolute top-3.5 left-3.5 h-4 w-4" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@company.com"
                className={cn(
                  "w-full rounded-xl border bg-background-primary py-3 pr-4 pl-10 text-body-sm text-text-primary",
                  "transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
                  errors.email ? "border-danger" : "border-border-default",
                )}
              />
            </div>
            {errors.email && (
              <p className="text-caption mt-1 text-danger">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Company & Project Type Row */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="company" className="text-body-sm font-medium text-text-primary">
              Company
            </label>
            <div className="relative mt-1.5">
              <Building2 className="text-text-muted absolute top-3.5 left-3.5 h-4 w-4" />
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Your company name"
                className="w-full rounded-xl border border-border-default bg-background-primary py-3 pr-4 pl-10 text-body-sm text-text-primary transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectType" className="text-body-sm font-medium text-text-primary">
              Project Type <span className="text-brand-primary">*</span>
            </label>
            <div className="relative mt-1.5">
              <Layers className="text-text-muted absolute top-3.5 left-3.5 h-4 w-4 pointer-events-none" />
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => handleChange("projectType", e.target.value)}
                className={cn(
                  "w-full appearance-none rounded-xl border bg-background-primary py-3 pr-4 pl-10 text-body-sm text-text-primary",
                  "transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
                  errors.projectType ? "border-danger" : "border-border-default",
                )}
              >
                <option value="">Select project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            {errors.projectType && (
              <p className="text-caption mt-1 text-danger">{errors.projectType}</p>
            )}
          </div>
        </div>

        {/* Budget & Timeline Row */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="budget" className="text-body-sm font-medium text-text-primary">
              Budget Range <span className="text-brand-primary">*</span>
            </label>
            <div className="relative mt-1.5">
              <Coins className="text-text-muted absolute top-3.5 left-3.5 h-4 w-4 pointer-events-none" />
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => handleChange("budget", e.target.value)}
                className={cn(
                  "w-full appearance-none rounded-xl border bg-background-primary py-3 pr-4 pl-10 text-body-sm text-text-primary",
                  "transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
                  errors.budget ? "border-danger" : "border-border-default",
                )}
              >
                <option value="">Select your budget</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            {errors.budget && (
              <p className="text-caption mt-1 text-danger">{errors.budget}</p>
            )}
          </div>

          <div>
            <label htmlFor="timeline" className="text-body-sm font-medium text-text-primary">
              Timeline <span className="text-brand-primary">*</span>
            </label>
            <div className="relative mt-1.5">
              <Calendar className="text-text-muted absolute top-3.5 left-3.5 h-4 w-4 pointer-events-none" />
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => handleChange("timeline", e.target.value)}
                className={cn(
                  "w-full appearance-none rounded-xl border bg-background-primary py-3 pr-4 pl-10 text-body-sm text-text-primary",
                  "transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
                  errors.timeline ? "border-danger" : "border-border-default",
                )}
              >
                <option value="">Select timeline</option>
                {timelines.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            {errors.timeline && (
              <p className="text-caption mt-1 text-danger">{errors.timeline}</p>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="details" className="text-body-sm font-medium text-text-primary">
            Project Details <span className="text-brand-primary">*</span>
          </label>
          <textarea
            id="details"
            rows={4}
            value={formData.details}
            onChange={(e) => handleChange("details", e.target.value)}
            placeholder="Tell us about your project, goals and expectations..."
            className={cn(
              "mt-1.5 w-full rounded-xl border bg-background-primary p-3.5 text-body-sm text-text-primary",
              "transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
              errors.details ? "border-danger" : "border-border-default",
            )}
          />
          {errors.details && (
            <p className="text-caption mt-1 text-danger">{errors.details}</p>
          )}
        </div>

        {/* Referral */}
        <div>
          <label htmlFor="referral" className="text-body-sm font-medium text-text-primary">
            How did you hear about us? <span className="text-text-muted">(Optional)</span>
          </label>
          <select
            id="referral"
            value={formData.referral}
            onChange={(e) => handleChange("referral", e.target.value)}
            className="mt-1.5 w-full appearance-none rounded-xl border border-border-default bg-background-primary px-4 py-3 text-body-sm text-text-primary transition-colors focus:border-brand-primary focus:bg-background-surface focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
          >
            <option value="">Select an option</option>
            {referralSources.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          trailingIcon={<Send className="h-4 w-4" />}
          className="mt-2 w-full bg-brand-gradient"
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>

        {/* Security guarantee note */}
        <p className="text-caption text-text-muted mt-2 flex items-center justify-center gap-1.5 text-center">
          <Lock className="h-3.5 w-3.5" />
          Your information is secure and will never be shared.
        </p>
      </form>
    </div>
  );
}
