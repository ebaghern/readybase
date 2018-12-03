import React from 'react';
import cx from 'classnames';
import { isArray } from 'lodash';
import PropTypes from 'prop-types';

const PageSection = ({ element, className, children, color, position }) => {
  const Element = element;
  return (
    <Element
      className={cx(
        isArray(className) ? className.join(' ') : className,
        'PageSection',
        {
          [`PageSection--${color}`]: color,
          [`PageSection--${position}`]: position
        }
      )}
    >
      {children}
    </Element>
  );
};

PageSection.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  color: PropTypes.oneOf(['gray', 'pale', 'white']),
  position: PropTypes.oneOf(['first', 'last', 'only'])
};

PageSection.defaultProps = {
  element: 'section'
};

export default PageSection;
