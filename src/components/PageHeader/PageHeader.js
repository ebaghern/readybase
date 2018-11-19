import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import smart from 'lib/utils/smartContent';
import themeOptions from 'lib/propTypes/oneOf-headerTheme';

const PageHeader = ({
  className,
  theme,
  heading,
  subHeading,
  content,
  children
}) => (
  <section className={cx(className, 'PageHeader', `PageHeader--${theme}`)}>
    <div className="PageHeader__contentWrapper">
      {heading && <h1 className="PageHeader__heading">{smart(heading)}</h1>}
      {subHeading && (
        <h2 className="PageHeader__subHeading">{smart(subHeading)}</h2>
      )}
      {content &&
        (React.isValidElement(content) ? (
          <div className="PageHeader__content">{content}</div>
        ) : (
          <p className="PageHeader__content">{smart(content)}</p>
        ))}
      {children && children('PageHeader')}
    </div>
  </section>
);

PageHeader.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(themeOptions),
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  children: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

PageHeader.defaultProps = {
  theme: 'light'
};

export default PageHeader;
