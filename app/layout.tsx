import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: `${site.name} Portfolio`,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_PH",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
    firstName: "Azi",
    lastName: "Nalda",
    username: "azinalda",
    images: [
      {
        url: "/portrait.jpg",
        width: 1900,
        height: 2375,
        alt: `${site.name}, ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.metaDescription,
    images: ["/portrait.jpg"],
  },
  category: "business services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#060c1a" },
  ],
};

/** Runs before first paint: restores accessibility prefs and decides whether the intro plays. */
const bootScript = `try{
  var d=document.documentElement;
  var t=localStorage.getItem('theme');
  if(!t)t='light';
  d.setAttribute('data-theme',t);
  var s=JSON.parse(localStorage.getItem('a11y')||'{}');
  if(s.size&&s.size!=='sm')d.setAttribute('data-size',s.size);
  if(s.contrast)d.setAttribute('data-contrast','high');
  if(s.motion)d.setAttribute('data-motion','reduce');
  if(s.links)d.setAttribute('data-links','under');
  if(!sessionStorage.getItem('intro'))d.setAttribute('data-boot','1');
}catch(e){}`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.metaDescription,
  url: site.url,
  image: `${site.url}/portrait.jpg`,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manila",
    addressCountry: "PH",
  },
  knowsAbout: site.services.map((s) => s.title),
  knowsLanguage: ["en", "tl"],
  sameAs: site.socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} — ${site.role}`,
  url: site.url,
  inLanguage: "en",
  about: { "@type": "Person", name: site.name },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
