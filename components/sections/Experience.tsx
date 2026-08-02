import { Section } from "@/components/ui/Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" file="03_experience.log" title="Experience">
      <ol className="relative space-y-10 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={`${item.role}-${item.org}`} className="relative">
            <span
              className={`absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full border ${
                item.status === "incoming"
                  ? "border-muted bg-bg"
                  : "border-accent bg-accent"
              }`}
              aria-hidden="true"
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-[15px] font-semibold text-fg">{item.role}</h3>
              {item.status === "incoming" && (
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
                  Incoming
                </span>
              )}
            </div>

            <p className="mt-0.5 text-sm text-muted">
              {item.org} · {item.period}
            </p>

            <p className="mt-2 max-w-content text-sm leading-6 text-fg/90">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
