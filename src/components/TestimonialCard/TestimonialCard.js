import React from 'react';
import PropTypes from 'prop-types';
import smart from 'lib/utils/smartContent';
import './TestimonialCard.scss';

const TestimonialCard = ({ name, title, img, location, content }) => (
  <figure>
    <blockquote>
      <p>{content}</p>
    </blockquote>
    <figcaption>
      {img &&
        img.src && (
          <div>
            <img src={img.src} alt={img.alt} />
          </div>
        )}
      <cite>
        <span>{name}</span>

        <span>{title}</span>
        {location && (
          <span>{`${location.city}, ${location.state ||
            location.country}`}</span>
        )}
      </cite>
    </figcaption>
  </figure>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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
