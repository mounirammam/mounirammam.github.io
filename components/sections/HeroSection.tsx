"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Surface from "@/components/ui/Surface";

export default function HeroSection() {
  return (
    <section id="home" className="section-spacing">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--foreground-soft)]">
              ML Engineer in the Making
            </p>

            <h1 className="text-5xl font-bold tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
              Mounir
              <br />
              <span className="text-[var(--accent)]">Ammam</span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-[var(--foreground-muted)]">
              Honours B.Sc. student in Computer Science at Université de
              Montréal. I work on machine learning, model experimentation, and
              applying AI to real-world software problems. I enjoy turning ideas
              into practical systems, and sharing what I learn along the way.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/Mounir_Ammam_CV_ENG.pdf" download>
                Download Resume
              </Button>
              <Button href="/contact" variant="ghost" className="px-0">
                Contact
              </Button>
            </div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Surface interactive className="overflow-hidden p-4 sm:p-5">
              <div className="hero-photo min-h-[480px] rounded-[1.5rem] border border-[var(--border)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.03]" />
            </Surface>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
