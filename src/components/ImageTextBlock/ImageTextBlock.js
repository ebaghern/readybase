import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import smart from 'lib/utils/smartContent';
import './ImageTextBlock.scss';

const ImageTextBlock = ({ content, heading, className, image }) => {
  const renderImage = (image) => {
    const imageClass = 'ImageTextBlock__image';
    if (React.isValidElement(image)) {
      return <div className={imageClass}>{image}</div>;
    } else if (image && image.src) {
      return (
        <img
          className="ImageTextBlock__image"
          src={image.src}
          alt={image.alt}
        />
      );
    }
  };

  return (
    <section className={cx('ImageTextBlock', className)}>
      {renderImage(image)}
      <div className="ImageTextBlock__contentWrapper">
        {heading && (
          <h2 className="ImageTextBlock__heading">{smart(heading)}</h2>
        )}
        <div className="ImageTextBlock__content">
          {typeof content === 'function' ? (
            content(smart)
          ) : (
            <p>{smart(content)}</p>
          )}
        </div>
      </div>
    </section>
  );
};

ImageTextBlock.propTypes = {
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  heading: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ]).isRequired,
  className: PropTypes.string
};

export default ImageTextBlock;
