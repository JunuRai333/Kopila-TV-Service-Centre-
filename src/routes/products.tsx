import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";
import { PRODUCTS } from "@/lib/content";
import { useBilingual, useLanguage } from "@/lib/i18n";
import { PRODUCT_IMAGES } from "@/lib/product-images";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Electrical Shop in Gaighat" },
      {
        name: "description",
        content:
          "Kitchen appliances, fans, speakers, LED bulbs, switches, chargers, extension boards and emergency lights available at our electrical shop in Gaighat.",
      },
      { property: "og:title", content: "Products — Kopila TV Service Center" },
      {
        property: "og:description",
        content: "Home appliances and electrical accessories at fair local prices in Gaighat.",
      },
      { property: "og:url", content: "https://kopila-tv-service-centre.lovable.app/products" },
    ],
    links: [{ rel: "canonical", href: "https://kopila-tv-service-centre.lovable.app/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useLanguage();
  const b = useBilingual();

  return (
    <>
      <Section tone="navy" className="py-14 sm:py-16">
        <SectionHeading
          eyebrow={t("products.eyebrow")}
          title={t("products.title")}
          subtitle={t("products.subtitle")}
          onNavy
          as="h1"
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title.en} index={i}>
              <article className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <img
                  src={PRODUCT_IMAGES[p.image]}
                  alt={p.title.en}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold">{b(p.title.en, p.title.np)}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b(p.desc.en, p.desc.np)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal index={2}>
          <p className="mt-10 rounded-xl border border-dashed border-border bg-surface p-5 text-center text-sm text-muted-foreground">
            {t("products.note")}
          </p>
        </Reveal>
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
