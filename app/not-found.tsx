import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
      <section className="flex min-h-[60vh] items-center pt-[calc(var(--nav-height)+4rem)]">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-foreground-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" className="mt-8" showArrow>
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
