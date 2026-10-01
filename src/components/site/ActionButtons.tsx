import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";
import { MapPin, MessageCircle, Phone } from "lucide-react";

export function ActionButtons({ onNavy = false }: { onNavy?: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild variant="brand" size="lg">
        <a href={BUSINESS.phoneHref}>
          <Phone aria-hidden="true" />
          {t("cta.call")} · {BUSINESS.phone}
        </a>
      </Button>
      <Button asChild variant={onNavy ? "onNavy" : "navy"} size="lg">
        <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" />
          {t("cta.whatsapp")}
        </a>
      </Button>
      <Button asChild variant={onNavy ? "onNavy" : "outline"} size="lg">
        <a href={BUSINESS.directions} target="_blank" rel="noopener noreferrer">
          <MapPin aria-hidden="true" />
          {t("cta.directions")}
        </a>
      </Button>
    </div>
  );
}
