"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Surface from "@/components/ui/Surface";
import Tag from "@/components/ui/Tag";

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl space-y-5"
          >
            <Tag>About Me</Tag>
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-8 shadow-[0_18px_45px_rgba(10,17,28,0.08)] sm:p-10">
              <p>My favorite quote:</p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-[2.8rem]">
                &ldquo;Tell everyone what you want to do and someone will want to help you do
                it&rdquo;
              </h2>
              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-[var(--foreground-soft)] sm:text-base">
                ~ W. Clement Stone
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="w-full max-w-4xl"
          >
            <Surface className="p-8 sm:p-10">
              <div className="space-y-6 text-base leading-8 text-[var(--foreground-muted)] sm:text-lg">
                <p>
                  I'm an aspiring ML engineer currently completing an Honours B.Sc. in Computer Science at Universite de Montreal. I focus on building intelligent, data-driven systems at the intersection of machine learning and software engineering.
                </p>
                <p>
                  I enjoy working with machine learning models, experimenting, evaluating, and understanding how they behave and applying them to real-world problems. I have worked on LLM-based systems, including AI-assisted code review tools, exploring how large language models can analyze and improve software development workflows.
                </p>
                <p>
                  Beyond the technical side, I am driven by building products. I am interested in turning ideas into real systems that people can use, not just experiments or research projects.
                </p>
                <p>
                  I also care about sharing knowledge and helping others access opportunities I had to discover the hard way.
                </p>

                <p>Outside of engineering, I spend most of my time swimming or playing soccer.</p>
              </div>
            </Surface>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
