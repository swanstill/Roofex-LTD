import Head from "next/head";
import { siteConfig } from "@/config/SiteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title,
  description,
  image,
  url,
}: SEOProps) {
  const {
    seo: { baseUrl, titleTemplate, defaultTitle, description: defaultDesc, ogImage, twitterHandle },
  } = siteConfig;

  const fullTitle = title
    ? titleTemplate.replace("%s", title)
    : titleTemplate.replace("%s", defaultTitle);

  const metaDescription = description || defaultDesc;
  const metaImage = image ? `${baseUrl}${image}` : `${baseUrl}${ogImage}`;
  const metaUrl = url || baseUrl;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
    </Head>
  );
}
