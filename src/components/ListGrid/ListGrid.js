import React from 'react';
import PropTypes from 'prop-types';
import smart from 'lib/utils/smartContent';
import Link from 'next/link';
import './ListGrid.scss';

const ListGrid = ({ items }) => (
  <ul className="ListGrid">
    {items.map((item, i) => (
      <li key={i} className="ListGrid__item">
        {typeof item === 'string' ? (
          smart(item)
        ) : (
          <Link href={{ pathname: item.href }}>
            <a className="ListGrid__link">{item.label}</a>
          </Link>
        )}
      </li>
    ))}
  </ul>
);

ListGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string
      })
    ])
  ).isRequired
};

export default ListGrid;
