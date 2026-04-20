"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Surface from "@/components/ui/Surface";
import Tag from "@/components/ui/Tag";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mounir-ammam-8532b123b/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/MounirAmmam",
    icon: Github,
  },
];

const location = {
  label: "Location",
  value: "Montreal, QC",
  icon: MapPin,
};

export default function ContactSection() {
  const LocationIcon = location.icon;

  return (
    <section id="contact" className="section-spacing pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <Tag>Contact</Tag>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
            Get in touch
          </h2>

          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  <Surface
                    interactive
                    className="flex h-full min-h-[168px] flex-col items-center justify-center gap-4 p-6 text-center"
                  >
                    <div className="rounded-full bg-[var(--accent)]/10 p-3 text-[var(--accent)] transition-transform duration-500 ease-out group-hover/card:-translate-y-1 group-hover/card:rotate-[-6deg] group-hover/card:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-soft)] transition-colors duration-300 group-hover/card:text-[var(--accent)]">
                        {item.label}
                      </p>
                    </div>
                  </Surface>
                </a>
              );
            })}

            <Surface className="flex items-center justify-center gap-4 p-5 text-center sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="rounded-full bg-[var(--accent)]/10 p-3 text-[var(--accent)]">
                <LocationIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-soft)]">
                  {location.label}
                </p>
                <p className="mt-1 text-sm text-[var(--foreground)]">{location.value}</p>
              </div>
            </Surface>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
