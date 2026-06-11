import Link from "next/link";
import { ReactNode } from "react";

export function BtnLink({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: string;
  variant?: "primary" | "dark" | "light" | "outline";
  className?: string;
}) {
  const cls = {
    primary: "btn-primary",
    dark: "btn-dark",
    light: "btn-light",
    outline: "btn-outline"
  }[variant];
  return (
    <Link href={href} className={`${cls} ${className}`}>
      <span className="lbl" data-text={children}>
        {children}
      </span>
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em]">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </p>
  );
}
