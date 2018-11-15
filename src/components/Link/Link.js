import React from 'react';
import NextLink from 'next/link';
import { routes } from 'src/config/routes';

const Link = ({ href, children, ...rest }) => {
  const match = routes.find((route) => route.page === href);
  const linkProps =
    match && match.prettyUrl ? { as: match.prettyUrl, href } : { href };
  return (
    <NextLink {...linkProps} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
