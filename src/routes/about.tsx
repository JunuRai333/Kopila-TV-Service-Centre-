import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";
import { PROCESS, WHY_US } from "@/lib/content";
import { useBilingual, useLanguage } from "@/lib/i18n";
import shopInteriorAsset from "@/assets/shop-interior-real.jpg.asset.json";
import repairBench from "@/assets/repair-bench.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kopila TV Service Center, Gaighat" },
      {
        name: "description",
        content:
          "A family-run electronics repair workshop in Gaighat, Udayapur since 2060 B.S. Learn how we diagnose, quote and repair TVs and home appliances.",
      },
      { property: "og:title", content: "About Kopila TV Service Center" },
      {
        property: "og:description",
        content: "Family-run electronics repair workshop in Gaighat, Udayapur since 2060 B.S.",
      },
      { property: "og:url", content: "https://kopila-tv-service-centre.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://kopila-tv-service-centre.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();
  const b = useBilingual();

  return (
    <>
      <Section tone="navy" className="py-14 sm:py-16">
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          subtitle={t("brand.tagline")}
          onNavy
          as="h1"
        />
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={shopInteriorAsset.url}
              alt="Inside Kopila TV Services Centre in Gaighat: shelves stocked with electrical goods, fans and DishHome products"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
          <Reveal index={1}>
            <p className="text-base leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("about.p2")}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "2060", l: b("B.S. established", "साल स्थापना") },
                { v: "20+", l: t("stats.years") },
                { v: "100,000+", l: t("stats.devices") },
                { v: "7", l: t("stats.days") },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4">
                  <p className="text-2xl font-extrabold text-navy">{s.v}</p>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title={t("why.title")} subtitle={t("why.subtitle")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.icon} index={i}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold">{b(w.title.en, w.title.np)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b(w.desc.en, w.desc.np)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title={t("process.title")}
              subtitle={t("process.subtitle")}
              align="left"
            />
            <ol className="mt-8 space-y-6">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} index={i}>
                  <li className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {p.step}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{b(p.title.en, p.title.np)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {b(p.desc.en, p.desc.np)}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal index={1}>
            <img
              src={repairBench}
              alt="Repair bench with multimeter, soldering iron and an opened television panel"
              width={1408}
              height={944}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
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
