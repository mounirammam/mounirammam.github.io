"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Surface from "@/components/ui/Surface";
import Tag from "@/components/ui/Tag";

const experienceSummary = [
  {
    title: "Research Intern",
    company: "Ubisoft La Forge",
    period: "June 2025 - Aug 2025",
    description:
      "Worked on RevMate, an LLM-based code review assistant, and built evaluation pipelines to measure comment quality, relevance, and coverage.",
  },
  {
    title: "Undergraduate Research Assistant",
    company: "GEODES Group, Universite de Montreal",
    period: "Sept 2024 - Jan 2025 / Jan 2026 - Present",
    description:
      "Contributed to research on simplifying reverse-engineered UML class diagrams using SBERT embeddings, LLM-based evaluation, and automation pipelines.",
  },
  {
    title: "Teaching Assistant, Software Engineering",
    company: "Universite de Montreal",
    period: "Sep 2025 - Dec 2025",
    description:
      "Led labs, held office hours, and supported students in software engineering concepts, assignments, and projects.",
  },
];

export default function ResumeSummarySection() {
  return (
    <section className="section-spacing pt-0">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <Tag>Resume Summary</Tag>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
              A quick view of recent experience
            </h2>
          </div>

          <Button href="/cv" variant="secondary">
            View Full CV
          </Button>
        </div>

        <div className="mt-8 grid gap-4">
          {experienceSummary.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.company}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Surface interactive className="p-6 sm:p-7">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover/card:text-[var(--accent)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base text-[var(--foreground-muted)]">{item.company}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--foreground-soft)]">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--foreground-muted)]">
                  {item.description}
                </p>
              </Surface>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
