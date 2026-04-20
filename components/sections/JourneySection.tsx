"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Globe, Download, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const contact = {
  linkedin: {
    label: "linkedin.com/in/MounirAmmam",
    href: "https://www.linkedin.com/in/mounir-ammam-8532b123b/",
  },
  github: {
    label: "github.com/MounirAmmam",
    href: "https://github.com/MounirAmmam",
  },
  portfolio: {
    label: "Portfolio",
    href: "https://mounirammam.github.io",
  },
  location: "Montreal, QC",
};

const education = [
  {
    degree: "M.Sc. in Machine Learning",
    institution: "McGill University & Mila",
    location: "Montreal, QC",
    period: "Starting Sept 2026 (Expected: Dec 2027)",
  },
  {
    degree: "Bachelor of Science in Computer Science (Honours)",
    institution: "Universite de Montreal",
    location: "Montreal, QC",
    period: "Graduated: April 2026",
    award: "Excellence Scholarship ($1000) - Department of Computer Science and Operations Research",
  },
];

const coursework = [
  "Software Engineering",
  "Concepts of Programming",
  "Data Structures & Algorithms",
  "Databases",
  "Operating Systems",
  "Data Science",
  "Machine Learning",
  "Deep Learning",
];

const experience = [
  {
    role: "Research Intern",
    organization: "Ubisoft La Forge",
    location: "Montreal, QC",
    period: "June 2025 - Aug 2025",
    supervisors: "Prof. Houari Sahraoui and Dr. Doriane Olewicki",
    notes: [
      "Worked on RevMate, an LLM-based code review assistant developed by Ubisoft.",
      "Implemented a systematic evaluation pipeline to quantify how effectively the tool reproduces human code review comments, using strict matching rules and LLM-as-a-judge similarity assessments.",
      "Developed an automated categorization pipeline using LLM-as-a-judge to classify generated comments into code review types, identifying coverage gaps to guide RevMate's improvement.",
      "Conducted comparative evaluations to assess the impact of advanced techniques (e.g., RAG and RAG with synthetic data) on the relevance of generated code review comments.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    organization: "GEODES group - Universite de Montreal",
    location: "Montreal, QC",
    period: "Sept 2024 - Jan 2025, Jan 2026 - Present",
    supervisors: "Prof. Houari Sahraoui",
    notes: [
      "Developed methods to simplify cluttered reverse-engineered UML class diagrams into higher-level conceptual representations.",
      "Used SBERT embeddings and LLM-based evaluation to distinguish domain-level concepts from implementation-level details.",
      "Implemented automation scripts for XML parsing, semantic similarity analysis, and pipeline orchestration.",
      "Ran Llama-70B-INT4 locally using ExLlamaV2 for large-scale evaluation experiments.",
      "Currently contributing to the project by constructing the ground-truth dataset and participating in technical discussions with the research team to evaluate implementation choices toward paper submission.",
    ],
  },
  {
    role: "Teaching Assistant - Software Engineering (IFT2255)",
    organization: "Universite de Montreal",
    location: "Montreal, QC",
    period: "Sep 2025 - Dec 2025",
    supervisors: null,
    notes: [
      "Led weekly lab sessions supporting 50+ students in software engineering concepts, and held office hours to answer students' questions and guide them in semester projects.",
      "Graded assignments and projects, and provided clear feedback.",
    ],
  },
];

const projects = [
  {
    name: "Backtesting Tool for Trading Strategies",
    description:
      "Implemented a Python-based backtesting tool using Backtrader, NumPy, and Matplotlib to evaluate trading strategies.",
  },
  {
    name: "Hockey Goal Prediction",
    description:
      "Built an expected goals (xG) prediction model for NHL shots using XGBoost, including data cleaning, feature engineering, and model evaluation.",
  },
  {
    name: "Camouflaged Animal Detection System",
    description:
      "Designed a hybrid detection approach leveraging motion cues and CLIP embeddings to detect camouflaged animals in complex scenes, using the MoCA dataset.",
  },
];

const extracurricular = [
  {
    role: "Member of Escouade Millenium",
    organization: "Millenium Quebecor",
    location: "Montreal, QC",
    period: "Jan 2025 - Present",
    notes: [
      "Representing Millennium Quebecor at events and engaging with students and professionals to promote entrepreneurship, innovation, collaboration, and the incubator's impactful programs.",
    ],
  },
];

const skillGroups = [
  {
    label: "Programming Languages",
    value: "Java, Python, C/C++, Haskell, JavaScript, TypeScript, HTML/CSS, XML, SQL",
  },
  {
    label: "Libraries & Frameworks",
    value: "NumPy, Pandas, Matplotlib, PyTorch, Backtrader, ExLlamaV2, Express.js, React, Node.js",
  },
  {
    label: "Tools",
    value: "GitHub, Git, IntelliJ, VSCode, PyCharm, Visual Paradigm, LaTeX",
  },
];

const languages = [
  { name: "English", level: "Full professional proficiency" },
  { name: "French", level: "Native" },
  { name: "Arabic", level: "Native" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--foreground)]">
        {children}
      </h3>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

function EntryHeader({
  title,
  subtitle,
  period,
  location,
}: {
  title: string;
  subtitle?: string;
  period: string;
  location?: string;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <div className="min-w-0">
        <h4 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">{title}</h4>
        {subtitle && (
          <p className="mt-0.5 text-sm italic text-[var(--foreground-muted)]">{subtitle}</p>
        )}
      </div>
      <div className="flex flex-col text-sm text-[var(--foreground-soft)] sm:items-end sm:text-right sm:whitespace-nowrap">
        {location && <span>{location}</span>}
        <span className="font-medium text-[var(--foreground-muted)]">{period}</span>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--foreground-muted)]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function JourneySection() {
  return (
    <section id="cv" className="section-spacing">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl"
        >
          <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_1px_4px_rgba(10,17,28,0.04),0_20px_60px_rgba(10,17,28,0.06)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.35),0_20px_60px_rgba(0,0,0,0.3)]">
            <header className="border-b border-[var(--border)] bg-[var(--surface-strong)] px-6 py-10 sm:px-10 sm:py-12">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
                  Mounir Ammam
                </h1>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[var(--foreground-muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {contact.location}
                  </span>
                  <a
                    href={contact.linkedin.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={contact.github.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={contact.portfolio.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    <Globe className="h-4 w-4" />
                    Portfolio
                  </a>
                </div>

                <a
                  href="/Mounir_Ammam_CV_ENG.pdf"
                  download
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </header>

            <div className="space-y-12 px-6 py-10 sm:px-10 sm:py-12">
              <section>
                <SectionHeading>Education</SectionHeading>
                <div className="space-y-6">
                  {education.map((item) => (
                    <div key={`${item.degree}-${item.institution}`}>
                      <EntryHeader
                        title={item.degree}
                        subtitle={item.institution}
                        period={item.period}
                        location={item.location}
                      />
                      {item.award && (
                        <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                          <span className="font-semibold text-[var(--foreground)]">Award:</span>{" "}
                          {item.award}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="pt-2">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Relevant Courses
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-xs text-[var(--foreground-muted)]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <SectionHeading>Experience</SectionHeading>
                <div className="space-y-8">
                  {experience.map((item) => (
                    <div key={`${item.role}-${item.organization}`}>
                      <EntryHeader
                        title={item.role}
                        subtitle={item.organization}
                        period={item.period}
                        location={item.location}
                      />
                      {item.supervisors && (
                        <p className="mt-2 text-xs text-[var(--foreground-soft)]">
                          <span className="font-semibold">Supervisors:</span> {item.supervisors}
                        </p>
                      )}
                      <BulletList items={item.notes} />
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Projects</SectionHeading>
                <div className="space-y-5">
                  {projects.map((project) => (
                    <div key={project.name}>
                      <h4 className="text-base font-semibold text-[var(--foreground)]">
                        {project.name}
                      </h4>
                      <p className="mt-1 text-sm leading-7 text-[var(--foreground-muted)]">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Extracurricular Activities</SectionHeading>
                <div className="space-y-6">
                  {extracurricular.map((item) => (
                    <div key={`${item.role}-${item.organization}`}>
                      <EntryHeader
                        title={item.role}
                        subtitle={item.organization}
                        period={item.period}
                        location={item.location}
                      />
                      <BulletList items={item.notes} />
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading>Skills</SectionHeading>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div
                      key={group.label}
                      className="flex flex-col gap-1 sm:flex-row sm:gap-3"
                    >
                      <p className="w-full shrink-0 text-sm font-semibold text-[var(--foreground)] sm:w-56">
                        {group.label}
                      </p>
                      <p className="text-sm leading-7 text-[var(--foreground-muted)]">
                        {group.value}
                      </p>
                    </div>
                  ))}
                  <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                    <p className="w-full shrink-0 text-sm font-semibold text-[var(--foreground)] sm:w-56">
                      Languages
                    </p>
                    <p className="text-sm leading-7 text-[var(--foreground-muted)]">
                      {languages
                        .map((l) => `${l.name} (${l.level})`)
                        .join(" | ")}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </motion.div>
      </Container>
    </section>
  );
}
