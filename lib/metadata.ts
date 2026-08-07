import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.owner }],
    creator: siteConfig.brand,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: siteConfig.brand,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
