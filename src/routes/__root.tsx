import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "../lib/i18n";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { Toaster } from "../components/ui/sonner";
import { WhatsAppButton } from "../components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kopila TV Service Center — Electronics Repair Gaighat" },
      {
        name: "description",
        content:
          "Electronics and TV repair in Gaighat, Udayapur since 2060 B.S. Smart TVs, speakers, fans, inverters and home appliances repaired, plus an electrical shop.",
      },
      { name: "author", content: "Kopila TV Service Center" },
      {
        name: "google-site-verification",
        content: "L9iQ4WbxiL0NoR92sBJ3HuPtSSX-rV5vtAqLluKHgqI",
      },
      { property: "og:site_name", content: "Kopila TV Service Center" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_NP" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "Electronics Repair Gaighat, TV Repair Udayapur, Electronics Shop Gaighat, Home Appliance Repair Nepal, Electrical Shop Udayapur",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ElectronicsStore",
          name: "Kopila TV Service Center",
          alternateName: "Kopila TV Services Centre",
          description:
            "Electronics repair and electrical shop in Gaighat, Udayapur, Nepal. Established 2060 B.S.",
          url: "https://https://kopila-tv-service-centre.vercel.app/",
          telephone: "+977-9842811905",
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
          hasMap: "https://www.google.com/maps?q=Gaighat,+Udayapur,+Nepal",
          sameAs: ["https://https://kopila-tv-service-centre.vercel.app/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* Required: nested routes render here. */}
            <Outlet />
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" />
        <WhatsAppButton />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
