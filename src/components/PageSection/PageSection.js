import React from 'react';
import cx from 'classnames';
import { isArray } from 'lodash';
import T from 'prop-types';

const PageSectionInner = ({ className, wrapChildren, children }) => {
  let classBlock = '';
  let wrapperClass = '';
  if (className) {
    const firstPassedClassName = isArray(className)
      ? className[0]
      : className.split(' ')[0];
    const splitPosition =
      firstPassedClassName.indexOf('--') > 0
        ? firstPassedClassName.indexOf('--')
        : 0;
    classBlock = splitPosition
      ? firstPassedClassName.substring(0, splitPosition)
      : firstPassedClassName;
    wrapperClass =
      classBlock + (classBlock.indexOf('__') >= 0 ? 'Inner' : '__inner');
  }

  return wrapChildren ? (
    <div className={cx('PageSection__inner', wrapperClass)}>{children}</div>
  ) : (
    children
  );
};

const PageSection = ({
  element,
  className,
  children,
  color,
  wrapChildren,
  position,
}) => {
  const Element = element;
  return (
    <Element
      className={cx(className, 'PageSection', {
        [`PageSection--${color}`]: color,
        [`PageSection--${position}`]: position,
      })}
    >
      <PageSectionInner wrapChildren={wrapChildren} className={className}>
        {children}
      </PageSectionInner>
    </Element>
  );
};

PageSection.propTypes = {
  element: T.oneOfType([T.string, T.element]),
  className: T.oneOfType([T.arrayOf(T.string), T.string]),
  color: T.oneOf(['gray', 'pale', 'white', false]),
  position: T.oneOf(['first', 'last', 'only', false]),
  wrapChildren: T.bool,
};

PageSection.defaultProps = {
  element: 'section',
  wrapChildren: true
};

export default PageSection;
