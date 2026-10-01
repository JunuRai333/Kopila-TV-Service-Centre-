import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/site/Section";
import { ActionButtons } from "@/components/site/ActionButtons";
import { FAQS } from "@/lib/content";
import { useBilingual, useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Repair Time, Warranty & Pricing" },
      {
        name: "description",
        content:
          "Answers about repair time, diagnosis charges, warranty, supported brands, home pickup and opening hours at our Gaighat electronics shop.",
      },
      { property: "og:title", content: "FAQ — Kopila TV Service Center" },
      {
        property: "og:description",
        content: "Common questions about electronics repair in Gaighat, Udayapur.",
      },
      { property: "og:url", content: "https://kopila-tv-service-centre.lovable.app/faq" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q.en,
            acceptedAnswer: { "@type": "Answer", text: f.a.en },
          })),
        }),
      },
    ],
    links: [{ rel: "canonical", href: "https://kopila-tv-service-centre.lovable.app/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLanguage();
  const b = useBilingual();

  return (
    <>
      <Section tone="navy" className="py-14 sm:py-16">
        <SectionHeading title={t("faq.title")} subtitle={t("faq.subtitle")} onNavy as="h1" />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q.en} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {b(f.q.en, f.q.np)}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {b(f.a.en, f.a.np)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
