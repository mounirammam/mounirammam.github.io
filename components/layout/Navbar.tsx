"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

function normalizePath(path: string | null | undefined) {
  if (!path) return "/";
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

export default function Navbar() {
  const pathname = usePathname();
  const activePath = normalizePath(pathname);
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  const isMenuOpen = menuOpenPath === activePath;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 pt-4"
    >
      <Container>
        <div className="rounded-[1.8rem] border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--surface)_90%,transparent)] px-4 py-3 shadow-[0_16px_40px_rgba(10,17,28,0.08)] backdrop-blur-xl dark:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
          <div className="flex items-center justify-between gap-3 md:hidden">
            <button
              type="button"
              onClick={() =>
                setMenuOpenPath((current) => (current === activePath ? null : activePath))
              }
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <div className="flex items-center gap-3">
              <a
                href="/Mounir_Ammam_CV_ENG.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
              >
                <FileDown className="h-4 w-4" />
                Resume
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div className="hidden items-center md:grid md:grid-cols-[auto_1fr] md:gap-4">
            <nav className="relative flex items-center justify-start gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-1.5">
              {navItems.map((item) => {
                const isActive = activePath === normalizePath(item.href);

                return (
                  <motion.div
                    key={item.href}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--foreground-soft)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {!isActive && (
                        <motion.span
                          aria-hidden
                          variants={{
                            rest: { opacity: 0, scale: 0.6 },
                            hover: { opacity: 1, scale: 1 },
                          }}
                          transition={{ type: "spring", stiffness: 420, damping: 26 }}
                          className="absolute inset-0 rounded-full bg-[var(--surface)] shadow-[0_1px_2px_rgba(10,17,28,0.06),0_6px_18px_rgba(10,17,28,0.10)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_6px_18px_rgba(0,0,0,0.3)]"
                        />
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="desktop-nav-indicator"
                          className="absolute inset-0 rounded-full bg-[var(--surface)] shadow-[0_1px_2px_rgba(10,17,28,0.06),0_4px_12px_rgba(10,17,28,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.25)]"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <motion.span
                        variants={{
                          rest: { y: 0 },
                          hover: { y: -1.5 },
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 24 }}
                        className="relative z-10"
                      >
                        {item.label}
                      </motion.span>
                      {!isActive && (
                        <motion.span
                          aria-hidden
                          variants={{
                            rest: { opacity: 0, scale: 0, y: 4 },
                            hover: { opacity: 1, scale: 1, y: 0 },
                          }}
                          transition={{ type: "spring", stiffness: 500, damping: 22, delay: 0.05 }}
                          className="pointer-events-none absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="flex items-center justify-end gap-3">
              <a
                href="/Mounir_Ammam_CV_ENG.pdf"
                download
                className="hidden items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] lg:inline-flex"
              >
                <FileDown className="h-4 w-4" />
                Resume PDF
              </a>
              <ThemeToggle />
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="mt-4 md:hidden"
              >
                <div className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                  <nav className="grid gap-1">
                    {navItems.map((item) => {
                      const isActive = activePath === normalizePath(item.href);

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setMenuOpenPath(null)}
                          className={`inline-flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                            isActive
                              ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm"
                              : "text-[var(--foreground-soft)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.header>
  );
}
