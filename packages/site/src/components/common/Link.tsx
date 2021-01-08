import NextLink, { LinkProps } from 'next/link';
import React, { HTMLAttributes } from 'react';

const defaultProps = [
  'as',
  'href',
  'scroll',
  'replace',
  'prefetch',
  'passHref',
];

const Link = ({ children, ...rest }: PropsWithChildren<Props>) => {
  const nextLinkProps = defaultProps.reduce(
    (obj, prop) => Object.assign(obj, { [prop]: rest[prop] }),
    {},
  ) as LinkProps;

  return (
    <NextLink {...nextLinkProps}>
      <a {...rest} href={(rest.as || rest.href) as string}>
        {children}
      </a>
    </NextLink>
  );
};

interface Props extends LinkProps, HTMLAttributes<HTMLElement> {}

export default Link;
