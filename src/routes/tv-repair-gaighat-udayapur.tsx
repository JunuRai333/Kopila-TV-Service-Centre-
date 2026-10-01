import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";
import { SERVICES, BUSINESS } from "@/lib/content";
import { useBilingual, useLanguage } from "@/lib/i18n";
import repairBench from "@/assets/repair-bench.jpg";

export const Route = createFileRoute("/tv-repair-gaighat-udayapur")({
  head: () => ({
    meta: [
      { title: "TV Repair Gaighat Udayapur — Kopila TV Service Center" },
      {
        name: "description",
        content:
          "LED, LCD and smart TV repair in Gaighat, Udayapur. Inverters, speakers, fans and home appliances fixed by a family workshop since 2060 B.S. Call 9842811905.",
      },
      {
        property: "og:title",
        content: "TV Repair Gaighat Udayapur — Kopila TV Service Center",
      },
      {
        property: "og:description",
        content:
          "Local electronics repair in Gaighat, Udayapur. Same-day diagnosis, genuine parts, honest pricing.",
      },
      {
        property: "og:url",
        content: "https://kopila-tv-service-centre.lovable.app/tv-repair-gaighat-udayapur",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://kopila-tv-service-centre.lovable.app/tv-repair-gaighat-udayapur",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Kopila TV Service Center",
          description:
            "TV and electronics repair workshop in Gaighat, Udayapur, Nepal. Established 2060 B.S.",
          telephone: "+977-9842811905",
          url: "https://kopila-tv-service-centre.lovable.app/tv-repair-gaighat-udayapur",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gaighat",
            addressRegion: "Udayapur",
            addressCountry: "NP",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "26.8033959",
            longitude: "86.6954127",
          },
          openingHours: ["Mo-Su 06:00-20:30"],
          priceRange: "$$",
          areaServed: {
            "@type": "City",
            name: "Gaighat",
          },
          serviceType: [
            "LED TV repair",
            "LCD TV repair",
            "Smart TV repair",
            "Inverter repair",
            "Speaker repair",
            "Home appliance repair",
          ],
        }),
      },
    ],
  }),
  component: LocalSeoPage,
});

function LocalSeoPage() {
  const { t } = useLanguage();
  const b = useBilingual();

  const localServices = ["Tv", "BatteryCharging", "Speaker", "Fan", "CookingPot", "Flashlight"];
  const areas = [
    { en: "Gaighat bazaar", np: "गाईघाट बजार" },
    { en: "Katari", np: "कटारी" },
    { en: "Beltar", np: "बेल्टार" },
    { en: "Triyuga", np: "त्रियुगा" },
    { en: "Udayapur district", np: "उदयपुर जिल्ला" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="surface-navy relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-1.5 text-xs font-medium"
            >
              <Star className="size-3.5 text-accent" aria-hidden="true" />
              {t("local.hero.badge")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl"
            >
              {t("local.hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg"
            >
              {t("local.hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8"
            >
              <ActionButtons onNavy />
            </motion.div>
            <p className="mt-6 flex items-center gap-2 text-sm text-navy-foreground/70">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {t("contact.addressValue")} · {BUSINESS.phone}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <img
              src={repairBench}
              alt="Technician repairing a television circuit board at Kopila TV Service Center in Gaighat"
              width={1408}
              height={944}
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("local.services.title")}
          subtitle={t("local.services.subtitle")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.filter((s) => localServices.includes(s.icon)).map((s, i) => (
            <Reveal key={s.icon} index={i}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold">{b(s.title.en, s.title.np)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b(s.desc.en, s.desc.np)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Areas served */}
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title={t("local.area.title")}
              subtitle={t("local.area.body")}
              align="left"
            />
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <li
                  key={area.en}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-medium shadow-[var(--shadow-card)]"
                >
                  {b(area.en, area.np)}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Map showing Gaighat, Udayapur service area for Kopila TV Service Center"
                src={BUSINESS.mapEmbed}
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Pricing / trust */}
      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title={t("local.pricing.title")} subtitle={t("local.pricing.body")} onNavy />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="brand" size="lg">
              <a href={BUSINESS.phoneHref}>
                <Phone aria-hidden="true" />
                {BUSINESS.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-navy-foreground/30">
              <Link to="/contact">{t("cta.requestRepair")}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={t("local.cta.title")} subtitle={t("local.cta.subtitle")} />
          <div className="mt-8 flex justify-center">
            <ActionButtons />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {t("contact.summer")} · {t("contact.winter")} · {t("contact.everyday")}
          </p>
          <Button asChild variant="ghost" size="sm" className="mt-4">
            <Link to="/">
              {t("local.link.home")}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
