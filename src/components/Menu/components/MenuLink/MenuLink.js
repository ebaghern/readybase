import React from 'react';
import Link from 'components/Link';
import PropTypes from 'prop-types';

const MenuLink = ({ href, target, label }) =>
  href ? (
    <Link href={href} prefetch>
      <a
        target={target}
        className="Menu__link"
        rel={target === '_blank' ? 'noopener noreferrer' : null}
      >
        {label}
      </a>
    </Link>
  ) : (
    <span className="Menu__link">{label}</span>
  );

MenuLink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.node,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
};

export default MenuLink;
