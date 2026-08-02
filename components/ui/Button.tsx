import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
}

export function Button({
  href,
  children,
  icon: Icon,
  variant = "secondary",
  external = false,
  download = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors duration-150 focus-visible:outline-none";

  const styles =
    variant === "primary"
      ? "border-accent-dim bg-accent/10 text-accent hover:bg-accent/15"
      : "border-border text-fg hover:border-muted hover:text-accent";

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {Icon ? <Icon size={16} strokeWidth={2} aria-hidden="true" /> : null}
      <span>{children}</span>
    </Link>
  );
}
