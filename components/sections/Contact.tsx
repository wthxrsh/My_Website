import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";

const contactLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail, external: false },
  { label: "GitHub", href: siteConfig.links.github, icon: Github, external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin, external: true },
  { label: "LeetCode", href: siteConfig.links.leetcode, icon: Code2, external: true },
];

export function Contact() {
  return (
    <Section id="contact" file="06_contact.md" title="Contact">
      <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
        {contactLinks.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              className="inline-flex items-center gap-2 text-sm text-fg/90 transition-colors duration-150 hover:text-accent"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon size={16} strokeWidth={2} aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
