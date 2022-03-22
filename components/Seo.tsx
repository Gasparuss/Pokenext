import Head from "next/head";
import { memo } from "react";
import { NextSeo } from "next-seo";
import { SITE_TITLE, SITE_TITLE_TEMPLATE, DEFAULT_IMAGE_URL } from "../utils/consts";

type SeoProps = {
  readonly title?: string;
  readonly description?: string;
  readonly imageUrl?: string;
};

export const Seo = memo<SeoProps>(({ title, description, imageUrl = DEFAULT_IMAGE_URL }) => {
  return (
    <>
      <NextSeo
        title={title ? SITE_TITLE_TEMPLATE.replace("%s", title) : SITE_TITLE}
        description={description}
        robotsProps={{
          maxSnippet: -1,
          maxImagePreview: "large",
          maxVideoPreview: -1,
        }}
        openGraph={{
          locale: "en_EN",
          title,
          description,
          site_name: SITE_TITLE,
        }}
      />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
});

Seo.displayName = "Seo";
