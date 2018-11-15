import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './TestimonialCredit.scss';

const TestimonialCredit = ({
  name,
  title,
  img,
  location,
  className,
  wrapperTag,
  citationTag
}) => {
  const Wrapper = wrapperTag;
  const Citation = citationTag;

  return (
    <Wrapper className={cx('TestimonialCredit', className)}>
      {img &&
        img.src && (
          <div className="TestimonialCredit__imgWrapper">
            <img
              className="TestimonialCredit__img"
              src={img.src}
              alt={img.alt}
            />
          </div>
        )}
      <Citation className="TestimonialCredit__citation">
        <span className="TestimonialCredit__citationName">{name}</span>

        {title && (
          <span className="TestimonialCredit__citationTitle">{title}</span>
        )}
        {location && (
          <span className="TestimonialCredit__location">{`${
            location.city
          }, ${location.state || location.country}`}</span>
        )}
      </Citation>
    </Wrapper>
  );
};

TestimonialCredit.defaultProps = {
  wrapperTag: 'div',
  citationTag: 'cite'
};

TestimonialCredit.propTypes = {
  wrapperTag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  citationTag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  location: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string
  })
};

export default TestimonialCredit;
