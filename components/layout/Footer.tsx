import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[var(--footer-border)] bg-[var(--footer-background)] text-[var(--footer-foreground)]">
      <Container className="grid gap-10 py-12 lg:grid-cols-[0.8fr_1fr_0.9fr]">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--footer-muted)]">Portfolio</p>
          <h2 className="text-2xl font-semibold tracking-[-0.04em]">Mounir Ammam</h2>
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--footer-muted)]">Explore</p>
          <div className="grid gap-3 text-sm">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-[var(--footer-foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--footer-muted)]">Contact</p>
          <div className="space-y-3 text-sm">
            <a
              href="https://www.linkedin.com/in/mounir-ammam-8532b123b/"
              target="_blank"
              rel="noreferrer"
              className="block transition-colors duration-300 hover:text-[var(--footer-foreground)]"
            >
              LinkedIn
            </a>
            <p className="text-[var(--footer-muted)]">Montreal, QC</p>
            <a
              href="/Mounir_Ammam_CV_ENG.pdf"
              download
              className="inline-flex rounded-full border border-[var(--footer-border)] px-4 py-2 transition-all duration-300 hover:border-[var(--footer-foreground)] hover:text-[var(--footer-foreground)]"
            >
              Download resume
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
