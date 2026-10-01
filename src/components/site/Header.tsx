import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Phone, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
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

export function Header() {
  const { t, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Kopila TV Services Centre logo"
            width={926}
            height={414}
            className="h-9 w-auto shrink-0 rounded-md object-contain lg:h-11"
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold sm:text-base">{t("brand.name")}</span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              {t("contact.addressValue")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                pathname === l.to && "bg-secondary text-foreground",
              )}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            aria-label={t("lang.label")}
            className="gap-1.5"
          >
            <Languages aria-hidden="true" />
            {t("lang.switch")}
          </Button>
          <Button asChild variant="brand" size="sm" className="hidden sm:inline-flex">
            <a href={BUSINESS.phoneHref}>
              <Phone aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-label={t("nav.menu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="container-page grid gap-1 py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground",
                    pathname === l.to && "bg-secondary text-foreground",
                  )}
                >
                  {t(l.key)}
                </Link>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
