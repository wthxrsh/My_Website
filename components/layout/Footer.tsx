import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-muted py-8">
      <p className="text-xs text-muted">
        Built with Next.js + TypeScript.
        <br className="sm:hidden" />
        <span className="sm:ml-1">
          © {year} {siteConfig.name}
        </span>
      </p>
    </footer>
  );
}
