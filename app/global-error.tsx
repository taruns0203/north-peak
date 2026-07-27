"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background-primary p-6 text-center text-text-primary">
        <h2 className="text-display-section font-bold">Something went wrong</h2>
        <p className="mt-4 max-w-md text-text-secondary">
          An unexpected error occurred. Please try again or refresh the page.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full bg-brand-primary px-6 py-3 font-sans font-medium text-white transition-colors hover:bg-brand-primary-hover"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
