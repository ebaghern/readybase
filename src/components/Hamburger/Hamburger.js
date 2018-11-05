import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Hamburger.scss';

const Hamburger = ({
  isActive,
  handleToggle,
  transitionStyle,
  className,
  screenReaderText
}) => (
  <button
    title="menu"
    className={cx(className, 'Hamburger', `Hamburger--${transitionStyle}`, {
      'Hamburger--active': isActive
    })}
    onClick={handleToggle}
  >
    <span className="Hamburger__line" />
    <span className="Hamburger__line" />
    <span className="Hamburger__line" />
    <span className="Hamburger__label">{screenReaderText}</span>
  </button>
);

Hamburger.propTypes = {
  transitionStyle: PropTypes.oneOf(['x', 'minus']),
  screenReaderText: PropTypes.string,
  className: PropTypes.string
};

Hamburger.defaultProps = {
  transitionStyle: 'x',
  screenReaderText: 'Toggle menu'
};

export default Hamburger;
