import { Button, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-display mt-4 text-5xl">That page doesn&apos;t exist.</h1>
      <p className="mt-4 text-ink-muted">The link may be old, or the project moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/portfolio" variant="ghost">See work</Button>
      </div>
    </Container>
  );
}
