import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import makeUrl from '@utils/makeUrl';

const SEO = ({
  url,
  children,
  image = '/img/meta.png',
  title = 'Kael, The best discord fun bot',
  description = 'Kael a Brazilian bot designed for Discord server management.',
}: PropsWithChildren<Props>) => {
  const router = useRouter();

  const metaImage = makeUrl(image);
  const canonical = makeUrl(url || router.pathname);

  return (
    <Head>
      <title>{title}</title>

      <link rel="canonical" href={canonical} />

      {/* <link rel="icon" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.svg" /> */}

      <link itemProp="url" href="https://kaelbot.com" />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="image" content={metaImage} />
      <meta name="description" content={description} />

      {/* OpenGraph */}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Kael Bot" />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />

      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />

      {/* Twitter */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />

      <meta name="twitter:site" content="@BotKael" />
      <meta name="twitter:creator" content="@BotKael" />
      <meta name="twitter:card" content="summary_large_image" />

      {children}
    </Head>
  );
};

interface Props {
  url?: string;
  title?: string;
  image?: string;
  description?: string;
}

export default SEO;
