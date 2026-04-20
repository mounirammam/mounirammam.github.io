import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
};

const styles = {
  primary:
    "bg-(--accent) text-(--accent-foreground) shadow-[0_12px_32px_color-mix(in_srgb,var(--accent)_28%,transparent)] hover:-translate-y-0.5 hover:bg-(--accent-strong)",
  secondary:
    "border border-(--border-strong) bg-(--surface) text-(--foreground) hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)",
  ghost:
    "text-(--foreground-muted) hover:-translate-y-0.5 hover:text-(--foreground)",
};

export default function Button({
  href,
  children,
  variant = "primary",
  download = false,
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const shouldUseAnchor = isExternal || download || href.startsWith("#");

  const content = (
    <>
      <span>{children}</span>
      {variant !== "ghost" && <ArrowUpRight className="h-4 w-4" />}
    </>
  );

  const classes = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${styles[variant]} ${className}`;

  if (shouldUseAnchor) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} download={download}>
      {content}
    </Link>
  );
}
