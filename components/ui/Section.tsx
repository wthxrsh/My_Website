import { ReactNode } from "react";

interface SectionProps {
  id: string;
  /** e.g. "02_about.ts" — shown as a file-path style label above the heading */
  file: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, file, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-border-muted py-16 first:border-t-0 first:pt-0 sm:py-20 ${className}`}
    >
      <div className="mb-8 flex items-baseline gap-3">
        <span className="text-xs text-muted" aria-hidden="true">
          //
        </span>
        <span className="text-xs tracking-wide text-muted">{file}</span>
      </div>
      <h2 className="mb-6 text-lg font-semibold text-fg sm:text-xl">{title}</h2>
      {children}
    </section>
  );
}
