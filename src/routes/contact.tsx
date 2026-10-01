import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";
import { ContactForm, RepairRequestForm } from "@/components/site/Forms";
import { BUSINESS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kopila TV Service Center, Gaighat" },
      {
        name: "description",
        content:
          "Call 9842811905, message us on WhatsApp, or send a repair request. Open 7 days a week in Gaighat, Udayapur, Nepal.",
      },
      { property: "og:title", content: "Contact Kopila TV Service Center" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, opening hours, map and repair request form for our Gaighat shop.",
      },
      { property: "og:url", content: "https://kopila-tv-service-centre.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://kopila-tv-service-centre.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <Section tone="navy" className="py-14 sm:py-16">
        <SectionHeading
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          onNavy
          as="h1"
        />
        <div className="mt-8 flex justify-center">
          <ActionButtons onNavy />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Phone,
              title: t("contact.phone"),
              body: (
                <div className="space-y-1">
                  <a href={BUSINESS.phoneHref} className="block hover:text-accent">
                    {BUSINESS.phone}
                  </a>
                  <a
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    {t("cta.whatsapp")}
                  </a>
                </div>
              ),
            },
            {
              icon: MapPin,
              title: t("contact.address"),
              body: <p>{t("contact.addressValue")}</p>,
            },
            {
              icon: Clock,
              title: t("contact.hours"),
              body: (
                <ul className="space-y-1">
                  <li>{t("contact.summer")}</li>
                  <li>{t("contact.winter")}</li>
                  <li>{t("contact.everyday")}</li>
                </ul>
              ),
            },
          ].map((c, i) => (
            <Reveal key={c.title} index={i}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">{c.title}</h2>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <RepairRequestForm />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t("contact.map")} />
        <Reveal index={1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Map showing Kopila TV Service Center in Gaighat, Udayapur"
              src={BUSINESS.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
