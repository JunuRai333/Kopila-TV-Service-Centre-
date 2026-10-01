import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import logo from "@/assets/kopila-logo.png";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/products", key: "nav.products" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/faq", key: "nav.faq" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="surface-navy">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kopila TV Services Centre logo"
              width={926}
              height={414}
              loading="lazy"
              className="h-11 w-auto shrink-0 rounded-md bg-background/95 object-contain p-1"
            />
            <span className="text-base font-bold">{t("brand.name")}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/75">
            {t("brand.tagline")}
          </p>
          <p className="mt-4 text-xs text-navy-foreground/60">{t("footer.built")}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {t("footer.quickLinks")}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-foreground/80 transition-colors hover:text-accent"
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {t("nav.contact")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/85">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={BUSINESS.phoneHref} className="hover:text-accent">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {t("cta.whatsapp")}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{t("contact.addressValue")}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {t("contact.summer")}
                <br />
                {t("contact.winter")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page py-5 text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
