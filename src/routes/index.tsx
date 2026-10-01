import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { ArrowRight, Clock, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionButtons } from "@/components/site/ActionButtons";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PROCESS, PRODUCTS, SERVICES, TESTIMONIALS, WHY_US, FAQS } from "@/lib/content";
import { useBilingual, useLanguage } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import shopInterior from "@/assets/shop-interior.jpg";
import repairBench from "@/assets/repair-bench.jpg";
import { PRODUCT_IMAGES } from "@/lib/product-images";
import ownerShop from "@/assets/owner-shop.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kopila TV Service Center — Repair in Gaighat" },
      {
        name: "description",
        content:
          "TV, speaker, fan, inverter and home appliance repair in Gaighat, Udayapur since 2060 B.S. Call 9842811905 — open 7 days a week.",
      },
      { property: "og:title", content: "Kopila TV Service Center — Electronics Repair Gaighat" },
      {
        property: "og:description",
        content:
          "Trusted electronics repair and electrical shop in Gaighat, Udayapur. Over 20 years of service.",
      },
      { property: "og:url", content: "https://kopila-tv-service-centre.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://kopila-tv-service-centre.lovable.app/" }],
  }),
  component: HomePage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Wrench;
  return <Cmp className={className} aria-hidden="true" />;
}

function HomePage() {
  const { t } = useLanguage();
  const b = useBilingual();

  const stats = [
    { value: "20+", label: t("stats.years") },
    { value: "100,000+", label: t("stats.devices") },
    { value: "7", label: t("stats.days") },
    { value: "100%", label: t("stats.local") },
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
              {t("hero.badge")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg"
            >
              {t("hero.subtitle")}
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
              <Clock className="size-4 text-accent" aria-hidden="true" />
              {t("hero.open")} · {t("contact.addressValue")}
            </p>
            <p className="mt-3 text-sm text-navy-foreground/70">
              {b("Serving", "सेवा क्षेत्र")}:{" "}
              <Link
                to="/tv-repair-gaighat-udayapur"
                className="underline underline-offset-2 hover:text-accent"
              >
                {b("Gaighat, Udayapur", "गाईघाट, उदयपुर")}
              </Link>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <img
              src={ownerShop.url}
              alt="The owner of Kopila TV Service Center outside the shop in Gaighat, Udayapur"
              width={1200}
              height={912}
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-5 left-5 rounded-xl bg-accent px-5 py-3 text-accent-foreground shadow-[var(--shadow-lift)]">
              <p className="text-2xl font-extrabold leading-none">2060</p>
              <p className="text-xs font-medium">{b("B.S. Established", "साल स्थापना")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container-page grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="text-center">
              <p className="text-3xl font-extrabold text-navy sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={repairBench}
              alt="Technician soldering a television main board at the repair bench"
              width={1408}
              height={944}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              align="left"
            />
            <Reveal index={1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {t("about.p1")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t("about.p2")}
              </p>
              <Button asChild variant="navy" size="lg" className="mt-7">
                <Link to="/about">
                  {b("Read our story", "हाम्रो कथा पढ्नुहोस्")}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.icon} index={i}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{b(s.title.en, s.title.np)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b(s.desc.en, s.desc.np)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="brand" size="lg">
            <Link to="/services">
              {t("cta.viewAll")}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Products */}
      <Section>
        <SectionHeading
          eyebrow={t("products.eyebrow")}
          title={t("products.title")}
          subtitle={t("products.subtitle")}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(0, 3).map((p, i) => (
            <Reveal key={p.title.en} index={i}>
              <article className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                <img
                  src={PRODUCT_IMAGES[p.image]}
                  alt={p.title.en}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{b(p.title.en, p.title.np)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b(p.desc.en, p.desc.np)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="navy" size="lg">
            <Link to="/products">
              {t("cta.viewAll")}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="navy">
        <SectionHeading title={t("why.title")} subtitle={t("why.subtitle")} onNavy />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.icon} index={i}>
              <article className="h-full rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 backdrop-blur">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon name={w.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-foreground">
                  {b(w.title.en, w.title.np)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">
                  {b(w.desc.en, w.desc.np)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading title={t("process.title")} subtitle={t("process.subtitle")} />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} index={i}>
              <li className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="text-sm font-extrabold tracking-widest text-accent">{p.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{b(p.title.en, p.title.np)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b(p.desc.en, p.desc.np)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Testimonials */}
      <Section tone="muted">
        <SectionHeading title={t("testimonials.title")} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((tm, i) => (
            <Reveal key={tm.name} index={i}>
              <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <Quote className="size-6 text-accent" aria-hidden="true" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {b(tm.quote.en, tm.quote.np)}
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {tm.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {b(tm.place.en, tm.place.np)}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ preview */}
      <Section>
        <SectionHeading title={t("faq.title")} subtitle={t("faq.subtitle")} />
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.slice(0, 4).map((f, i) => (
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
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/faq">
                {t("cta.viewAll")}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section tone="navy">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
              align="left"
              onNavy
            />
            <div className="mt-8">
              <ActionButtons onNavy />
            </div>
          </div>
          <Reveal index={1}>
            <div className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6">
              <h3 className="text-lg font-semibold text-navy-foreground">{t("contact.hours")}</h3>
              <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
                <li>{t("contact.summer")}</li>
                <li>{t("contact.winter")}</li>
                <li>{t("contact.everyday")}</li>
              </ul>
              <Button asChild variant="brand" size="lg" className="mt-6 w-full">
                <Link to="/contact">{t("cta.requestRepair")}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
