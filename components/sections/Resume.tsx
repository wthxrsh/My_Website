import { Download } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export function Resume() {
  return (
    <Section id="resume" file="05_resume.pdf" title="Resume">
      <div className="flex flex-col items-start gap-5 rounded-lg border border-border bg-surface/40 p-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] text-fg/90">Download my latest resume.</p>
        <Button href={siteConfig.resumeUrl} icon={Download} variant="primary" download>
          Download Resume
        </Button>
      </div>
    </Section>
  );
}
