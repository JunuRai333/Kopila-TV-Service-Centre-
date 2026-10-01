import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ActionButtons } from "@/components/site/ActionButtons";
import { useBilingual, useLanguage } from "@/lib/i18n";
import repairBench from "@/assets/repair-bench.jpg";
import productsKitchen from "@/assets/products-kitchen.jpg";
import productsElectrical from "@/assets/products-electrical.jpg";
import ownerShop from "@/assets/owner-shop.png";
import storefrontPhoto from "@/assets/storefront-photo.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Kopila TV Service Center" },
      {
        name: "description",
        content:
          "Photos of our electronics shop in Gaighat, Udayapur: the repair bench, display shelves and the appliances and electricals we stock.",
      },
      { property: "og:title", content: "Gallery — Kopila TV Service Center" },
      {
        property: "og:description",
        content: "A look inside our electronics repair workshop and shop in Gaighat, Udayapur.",
      },
      { property: "og:url", content: "https://kopila-tv-service-centre.lovable.app/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://kopila-tv-service-centre.lovable.app/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useLanguage();
  const b = useBilingual();

  const photos = [
    {
      src: ownerShop,
      w: 1200,
      h: 912,
      caption: b("Our team at the shop", "पसलमा हाम्रो टोली"),
      alt: "Owner of Kopila TV Services Centre with customers in front of the shop",
      wide: true,
    },
    {
      src: storefrontPhoto,
      w: 1200,
      h: 912,
      caption: b("Our shop in Gaighat", "गाईघाटस्थित हाम्रो पसल"),
      alt: "Street view of the shop building in Gaighat, Udayapur",
      wide: false,
    },

    {
      src: repairBench,
      w: 1408,
      h: 944,
      caption: b("The repair bench", "मर्मत बेन्च"),
      alt: "Technician soldering a television main board with a multimeter nearby",
      wide: false,
    },
    {
      src: productsKitchen,
      w: 1200,
      h: 912,
      caption: b("Kitchen appliances in stock", "स्टकमा रहेका भान्साका उपकरण"),
      alt: "Rice cooker, mixer grinder and electric kettle on display",
      wide: false,
    },
    {
      src: productsElectrical,
      w: 1200,
      h: 912,
      caption: b("Electrical accessories", "इलेक्ट्रिकल सामान"),
      alt: "LED bulbs, extension board, switches, charger and emergency light",
      wide: true,
    },
  ];

  return (
    <>
      <Section tone="navy" className="py-14 sm:py-16">
        <SectionHeading
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
          onNavy
          as="h1"
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p.caption} index={i} className={p.wide ? "md:col-span-2" : ""}>
              <figure className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                />
                <figcaption className="p-4 text-sm font-medium text-muted-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
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
