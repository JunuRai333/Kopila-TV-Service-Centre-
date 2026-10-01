import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  tone = "plain",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "plain" | "muted" | "navy";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "muted" && "bg-surface",
        tone === "navy" && "surface-navy",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onNavy = false,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  onNavy?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            onNavy ? "text-accent" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <As
        className={cn(
          "mt-3 text-3xl font-bold sm:text-4xl",
          onNavy ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </As>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            onNavy ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
