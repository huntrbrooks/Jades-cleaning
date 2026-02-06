import type { MetadataRoute } from "next";

const baseUrl = "https://totalresetservices.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/packages",
    "/before-after",
    "/about",
    "/how-it-works",
    "/service-areas",
    "/faqs",
    "/reviews",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/thank-you",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
