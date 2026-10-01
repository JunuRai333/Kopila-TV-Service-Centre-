import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <motion.a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta.whatsapp")}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      <span className="text-sm font-semibold leading-none">WhatsApp</span>
    </motion.a>
  );
}
