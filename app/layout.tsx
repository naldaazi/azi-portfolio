import type { Metadata } from "next";
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

const description = `${site.role}. ${site.lede}`;

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
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
  var noMotion=s.motion||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!noMotion)d.classList.add('js-reveal');
  if(!sessionStorage.getItem('intro'))d.setAttribute('data-boot','1');
}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
