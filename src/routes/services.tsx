import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";
import { PROCESS, SERVICES } from "@/lib/content";
import { useBilingual, useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Repair Services — TV & Appliances, Udayapur" },
      {
        name: "description",
        content:
          "We repair LED and smart TVs, speakers, radios, fans, inverters, irons, rice cookers, mixers, emergency lights and more in Gaighat, Udayapur.",
      },
      { property: "og:title", content: "Repair Services — Kopila TV Service Center" },
      {
        property: "og:description",
        content: "TV, appliance and electronics repair services in Gaighat, Udayapur.",
      },
      { property: "og:url", content: "https://kopila-tv-service-centre.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://kopila-tv-service-centre.lovable.app/services" }],
  }),
  component: ServicesPage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Wrench;
  return <Cmp className={className} aria-hidden="true" />;
}

function ServicesPage() {
  const { t } = useLanguage();
  const b = useBilingual();

  const extras = b(
    "Also repaired: DVD players, stabilizers, water heaters, sewing machine motors, hair dryers, chargers and most other household electronics.",
    "अन्य मर्मत: डिभिडी प्लेयर, स्ट्याबिलाइजर, वाटर हिटर, सिलाई मेसिनको मोटर, हेयर ड्रायर, चार्जर तथा अन्य अधिकांश घरायसी इलेक्ट्रोनिक्स।",
  );

  return (
    <>
      <Section tone="navy" className="py-14 sm:py-16">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
          onNavy
          as="h1"
        />
      </Section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.icon} index={i}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">{b(s.title.en, s.title.np)}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b(s.desc.en, s.desc.np)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal index={2}>
          <p className="mt-10 rounded-xl border border-dashed border-border bg-surface p-5 text-center text-sm text-muted-foreground">
            {extras}
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading title={t("process.title")} subtitle={t("process.subtitle")} />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} index={i}>
              <li className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="text-sm font-extrabold tracking-widest text-accent">{p.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{b(p.title.en, p.title.np)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b(p.desc.en, p.desc.np)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Button asChild variant="brand" size="lg">
            <Link to="/contact">{t("cta.requestRepair")}</Link>
          </Button>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} onNavy />
        <div className="mt-8 flex justify-center">
          <ActionButtons onNavy />
        </div>
      </Section>
    </>
  );
}
