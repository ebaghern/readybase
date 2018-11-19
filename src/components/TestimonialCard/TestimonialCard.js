import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import smart from 'lib/utils/smartContent';
import TestimonialCredit from 'components/TestimonialCredit';

const TestimonialCard = ({
  imgLocation,
  content,
  className,
  img,
  ...creditProps
}) => (
  <figure className={cx('TestimonialCard', className)}>
    {imgLocation === 'top' &&
      img && (
        <div className="TestimonialCard__imgWrapper">
          <img className="TestimonialCard__img" {...img} />
        </div>
      )}
    <blockquote className="TestimonialCard__quote">
      <p>{smart(content)}</p>
    </blockquote>
    <TestimonialCredit
      img={imgLocation === 'bottom' ? img : undefined}
      className="TestimonialCard__caption"
      wrapperTag="figcaption"
      {...creditProps}
    />
  </figure>
);

TestimonialCard.defaultProps = {
  imgLocation: 'bottom'
};

TestimonialCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  imgLocation: PropTypes.oneOf(['top', 'bottom']),
  location: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string
  })
};

export default TestimonialCard;
