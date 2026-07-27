"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center py-16">
      <Container className="text-center">
        <Heading as="h2" variant="section">
          Something went wrong
        </Heading>
        <Text variant="body-lg" className="mt-4 max-w-md mx-auto">
          We encountered an unexpected issue while rendering this page.
        </Text>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => reset()}>Try again</Button>
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
