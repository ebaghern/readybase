import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import smart from 'lib/utils/smartContent';
import TestimonialCredit from 'components/TestimonialCredit';
import './TestimonialCard.scss';

const TestimonialCard = ({ content, className, ...creditProps }) => (
  <figure className={cx('TestimonialCard', className)}>
    <blockquote className="TestimonialCard__quote">
      <p>{smart(content)}</p>
    </blockquote>
    <TestimonialCredit
      className="TestimonialCard__caption"
      wrapperTag="figcaption"
      {...creditProps}
    />
  </figure>
);

TestimonialCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
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

export default TestimonialCard;
