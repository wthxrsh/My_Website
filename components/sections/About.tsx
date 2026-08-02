import { Section } from "@/components/ui/Section";
import { aboutParagraphs, interests } from "@/lib/data";

export function About() {
  return (
    <Section id="about" file="01_about.md" title="About">
      <div className="max-w-content space-y-4">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-[15px] leading-7 text-fg/90">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-md border border-border px-3 py-1 text-xs text-muted"
          >
            {interest}
          </span>
        ))}
      </div>
    </Section>
  );
}
