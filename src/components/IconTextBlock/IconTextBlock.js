import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import smart from 'lib/utils/smartContent';

const IconTextBlock = ({ content, heading, className, icon }) => {
  const renderIcon = (icon) => {
    const iconClass = 'IconTextBlock__icon';
    if (React.isValidElement(icon)) {
      return <div className={iconClass}>{icon}</div>;
    } else if (icon && icon.src) {
      return (
        <img className="IconTextBlock__icon" src={icon.src} alt={icon.alt} />
      );
    }
  };

  return (
    <div className={cx('IconTextBlock', className)}>
      {renderIcon(icon)}
      <div className="IconTextBlock__contentWrapper">
        {heading && (
          <h3 className="IconTextBlock__heading">{smart(heading)}</h3>
        )}
        {content && (
          <div className="IconTextBlock__content">
            {typeof content === 'function' ? (
              content(smart)
            ) : (
              <p>{smart(content)}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

IconTextBlock.propTypes = {
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  heading: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ]).isRequired,
  className: PropTypes.string
};

export default IconTextBlock;
