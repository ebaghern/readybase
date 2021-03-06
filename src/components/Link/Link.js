import React from 'react';
import NextLink from 'next/link';
import { find } from 'lodash';
import { routes } from 'server/routes';

const Link = ({ href, children, ...rest }) => {
  const match = find(routes, (route) => route.page === href);
  const linkProps =
    match && match.prettyUrl ? { as: match.prettyUrl, href } : { href };

  return (
    <NextLink {...linkProps} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
