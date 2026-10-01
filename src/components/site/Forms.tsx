import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS } from "@/lib/content";
import { useBilingual, useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Frontend-only delivery.
 * Submissions are handed to WhatsApp (default) with an email fallback, so the
 * shop receives every message without any backend or third-party account.
 * Optionally paste a Formspree URL (https://formspree.io/f/xxxxxxx) below and
 * submissions will also be posted there.
 */
const FORM_ENDPOINT = "https://formspree.io/f/xjyklzzv";
const OWNER_EMAIL = "kopilatvservice@gmail.com";

function buildMessage(title: string, fields: [string, string][]) {
  const lines = fields
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value.trim()}`);
  return [title, "", ...lines].join("\n");
}

type Delivery = "whatsapp" | "email";

async function submitForm(
  payload: Record<string, string>,
  message: string,
  subject: string,
  delivery: Delivery = "whatsapp",
) {
  if (FORM_ENDPOINT) {
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Ignore: the WhatsApp/email handoff below is the primary channel.
    }
  }

  const url =
    delivery === "email"
      ? `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
      : `${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

  if (typeof window !== "undefined") {
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }
  return "sent" as const;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-destructive">{message}</p>;
}

const inputBase = "bg-background";

type ContactValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const { t } = useLanguage();
  const [done, setDone] = useState(false);
  const [delivery, setDelivery] = useState<Delivery>("whatsapp");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const message = buildMessage("New message from the website", [
        ["Name", values.name],
        ["Phone", values.phone],
        ["Email", values.email],
        ["Message", values.message],
      ]);
      await submitForm({ form: "contact", ...values }, message, "Website enquiry", delivery);
      setDone(true);
      reset();
      toast.success(t("form.successTitle"), { description: t("form.successBody") });
    } catch {
      toast.error(t("form.notConfigured"));
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <h2 className="text-xl font-semibold">{t("form.contactTitle")}</h2>

      <div>
        <Label htmlFor="c-name">{t("form.name")}</Label>
        <Input
          id="c-name"
          className={cn("mt-1.5", inputBase)}
          aria-invalid={!!errors.name}
          {...register("name", { required: t("form.required") })}
        />
        <FieldError message={errors.name?.message} />
      </div>

      <div>
        <Label htmlFor="c-phone">{t("form.phone")}</Label>
        <Input
          id="c-phone"
          type="tel"
          inputMode="tel"
          className={cn("mt-1.5", inputBase)}
          aria-invalid={!!errors.phone}
          {...register("phone", {
            required: t("form.required"),
            pattern: { value: /^[0-9+\-\s()]{7,20}$/, message: t("form.invalidPhone") },
          })}
        />
        <FieldError message={errors.phone?.message} />
      </div>

      <div>
        <Label htmlFor="c-email">{t("form.email")}</Label>
        <Input
          id="c-email"
          type="email"
          className={cn("mt-1.5", inputBase)}
          aria-invalid={!!errors.email}
          {...register("email", {
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("form.invalidEmail") },
          })}
        />
        <FieldError message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="c-message">{t("form.message")}</Label>
        <Textarea
          id="c-message"
          rows={5}
          className={cn("mt-1.5", inputBase)}
          aria-invalid={!!errors.message}
          {...register("message", { required: t("form.required") })}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <Button
          type="submit"
          variant="brand"
          size="lg"
          disabled={isSubmitting}
          onClick={() => setDelivery("whatsapp")}
        >
          {isSubmitting ? t("cta.sending") : `${t("cta.send")} · WhatsApp`}
        </Button>
        <Button
          type="submit"
          variant="outline"
          size="lg"
          disabled={isSubmitting}
          onClick={() => setDelivery("email")}
        >
          Email
        </Button>
      </div>
      {done ? <p className="text-sm text-muted-foreground">{t("form.successBody")}</p> : null}
    </form>
  );
}

type RepairValues = {
  name: string;
  phone: string;
  deviceType: string;
  brand: string;
  problem: string;
  preferredContact: string;
};

export function RepairRequestForm() {
  const { t } = useLanguage();
  const b = useBilingual();
  const [done, setDone] = useState(false);
  const [delivery, setDelivery] = useState<Delivery>("whatsapp");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RepairValues>({
    defaultValues: {
      name: "",
      phone: "",
      deviceType: "",
      brand: "",
      problem: "",
      preferredContact: "phone",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const message = buildMessage("New repair request from the website", [
        ["Name", values.name],
        ["Phone", values.phone],
        ["Device", values.deviceType],
        ["Brand", values.brand],
        ["Problem", values.problem],
        ["Preferred contact", values.preferredContact],
      ]);
      await submitForm({ form: "repair", ...values }, message, "Repair request", delivery);
      setDone(true);
      reset();
      toast.success(t("form.successTitle"), { description: t("form.successBody") });
    } catch {
      toast.error(t("form.notConfigured"));
    }
  });

  const deviceOptions = [
    { value: "tv", label: b("Television / Smart TV", "टेलिभिजन / स्मार्ट टिभी") },
    { value: "speaker", label: b("Speaker / Sound system", "स्पिकर / साउन्ड सिस्टम") },
    { value: "fan", label: b("Fan / Motor", "पंखा / मोटर") },
    { value: "inverter", label: b("Inverter / Battery", "इन्भर्टर / ब्याट्री") },
    { value: "kitchen", label: b("Kitchen appliance", "भान्साको उपकरण") },
    { value: "other", label: b("Other electronics", "अन्य इलेक्ट्रोनिक्स") },
  ];

  const contactOptions = [
    { value: "phone", label: b("Phone call", "फोन कल") },
    { value: "whatsapp", label: b("WhatsApp", "ह्वाट्सएप") },
    { value: "visit", label: b("I will visit the shop", "म पसलमा आउँछु") },
  ];

  const selectClass =
    "mt-1.5 h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <h2 className="text-xl font-semibold">{t("form.repairTitle")}</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="r-name">{t("form.name")}</Label>
          <Input
            id="r-name"
            className={cn("mt-1.5", inputBase)}
            aria-invalid={!!errors.name}
            {...register("name", { required: t("form.required") })}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="r-phone">{t("form.phone")}</Label>
          <Input
            id="r-phone"
            type="tel"
            inputMode="tel"
            className={cn("mt-1.5", inputBase)}
            aria-invalid={!!errors.phone}
            {...register("phone", {
              required: t("form.required"),
              pattern: { value: /^[0-9+\-\s()]{7,20}$/, message: t("form.invalidPhone") },
            })}
          />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <Label htmlFor="r-device">{t("form.deviceType")}</Label>
          <select
            id="r-device"
            className={selectClass}
            aria-invalid={!!errors.deviceType}
            {...register("deviceType", { required: t("form.required") })}
          >
            <option value="">{t("form.select")}</option>
            {deviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <FieldError message={errors.deviceType?.message} />
        </div>
        <div>
          <Label htmlFor="r-brand">{t("form.brand")}</Label>
          <Input id="r-brand" className={cn("mt-1.5", inputBase)} {...register("brand")} />
        </div>
      </div>

      <div>
        <Label htmlFor="r-problem">{t("form.problem")}</Label>
        <Textarea
          id="r-problem"
          rows={4}
          className={cn("mt-1.5", inputBase)}
          aria-invalid={!!errors.problem}
          {...register("problem", { required: t("form.required") })}
        />
        <FieldError message={errors.problem?.message} />
      </div>

      <div>
        <Label htmlFor="r-contact">{t("form.preferredContact")}</Label>
        <select id="r-contact" className={selectClass} {...register("preferredContact")}>
          {contactOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <Button
          type="submit"
          variant="navy"
          size="lg"
          disabled={isSubmitting}
          onClick={() => setDelivery("whatsapp")}
        >
          {isSubmitting ? t("cta.sending") : `${t("cta.submit")} · WhatsApp`}
        </Button>
        <Button
          type="submit"
          variant="outline"
          size="lg"
          disabled={isSubmitting}
          onClick={() => setDelivery("email")}
        >
          Email
        </Button>
      </div>
      {done ? <p className="text-sm text-muted-foreground">{t("form.successBody")}</p> : null}
    </form>
  );
}
