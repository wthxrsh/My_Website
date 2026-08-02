import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" file="02_skills.json" title="Skills">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface/40 p-5 transition-colors duration-150 hover:border-muted"
          >
            <h3 className="mb-3 text-sm font-semibold text-accent">
              {group.category}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-fg/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
