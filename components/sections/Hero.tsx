import { Download, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import { heroSummary, titles } from "@/lib/data";

export function Hero() {
  return (
    <section className="pb-16 pt-20 sm:pb-20 sm:pt-28 animate-fadeIn">
      <p className="mb-6 text-sm text-muted">
        <span className="text-accent">wthxrsh@systems</span>
        <span className="text-muted">:</span>
        <span className="text-accent-dim">~</span>
        <span className="text-muted">$ </span>
        whoami
      </p>

      <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {siteConfig.name}
      </h1>

      <ul className="mt-4 space-y-1">
        {titles.map((title) => (
          <li key={title} className="text-sm text-muted sm:text-[15px]">
            {title}
          </li>
        ))}
      </ul>

      <p className="mt-6 max-w-content text-[15px] leading-7 text-fg/90">
        {heroSummary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={siteConfig.resumeUrl} icon={Download} variant="primary" download>
          Download Resume
        </Button>
        <Button href={siteConfig.links.github} icon={Github} external>
          GitHub
        </Button>
        <Button href={siteConfig.links.linkedin} icon={Linkedin} external>
          LinkedIn
        </Button>
        <Button href={siteConfig.links.leetcode} icon={Code2} external>
          LeetCode
        </Button>
      </div>
    </section>
  );
}
