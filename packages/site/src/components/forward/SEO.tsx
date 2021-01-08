import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import urlJoin from 'url-join';

const makeBaseUrl = (base: string) => {
  return !/^(https|http):\/\/+/.test(base)
    ? urlJoin('https://kaelbot.xyz', base)
    : base;
};

const SEO: React.FC<Props> = ({
  url = '',
  title = 'Kael | The best discord fun bot',
  image = '/img/meta-image.png',
  description = 'Kael a Brazilian bot designed for Discord server management.',
  children,
}) => {
  const router = useRouter();

  const metaImage = makeBaseUrl(image);
  const canonical = makeBaseUrl(url || router.pathname);

  return (
    <NextHead>
      <title>{title}</title>

      <link rel="canonical" href={canonical} />

      <link itemProp="url" href="https://kaelbot.xyz" />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      <meta name="image" content={metaImage} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={description} />

      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta property="og:image" content={metaImage} />
      <meta property="og:image:secure_url" content={metaImage} />

      <meta name="twitter:site" content="@hitechline_" />
      <meta name="twitter:creator" content="@hitechline_" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:src" content={metaImage} />

      <link rel="icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />

      {children}
    </NextHead>
  );
};

interface Props {
  url?: string;
  title?: string;
  image?: string;
  description?: string;
}

export default SEO;
