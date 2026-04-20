"use client";

import { motion } from "framer-motion";
import { BookOpenText, Code2, Globe, MonitorSmartphone, Smartphone } from "lucide-react";
import Container from "@/components/ui/Container";
import Surface from "@/components/ui/Surface";
import Tag from "@/components/ui/Tag";

const services = [
  {
    title: "Math Tutoring",
    description: "Support for mathematics courses with clear explanations, practice guidance, and problem solving.",
    icon: BookOpenText,
  },
  {
    title: "Programming Tutoring",
    description: "Helping students and learners build confidence in programming concepts, logic, and implementation.",
    icon: Code2,
  },
  {
    title: "Web Development",
    description: "Designing and building clean, responsive websites and web applications.",
    icon: Globe,
  },
  {
    title: "App Development",
    description: "Creating software products with strong structure, usability, and scalable foundations.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile Development",
    description: "Building mobile-first experiences and applications with modern development practices.",
    icon: Smartphone,
  },
];

export default function ToolboxSection() {
  return (
    <section className="section-spacing pt-0">
      <Container>
        <div className="space-y-4">
          <Tag>Services</Tag>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
            Services I offer
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[var(--foreground-muted)]">
            I offer both educational support and software development services, spanning tutoring,
            AI-oriented engineering, and product-focused application development.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <Surface interactive className="h-full p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-transform duration-500 ease-out group-hover/card:-translate-y-1 group-hover/card:rotate-[-6deg] group-hover/card:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover/card:text-[var(--accent)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {service.description}
                  </p>
                </Surface>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
