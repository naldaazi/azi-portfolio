import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { path: "/", priority: 1 },
    { path: "/projects", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/testimonials", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ].map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  const projects = site.projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...projects];
}
