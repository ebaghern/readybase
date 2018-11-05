import React from 'react';
import PropTypes from 'prop-types';
import smart from 'lib/utils/smartContent';
import './TeamCard.scss';

const TeamCard = ({ name, title, img, location, bio }) => (
  <article>
    {img &&
      img.src && (
        <div>
          <img src={img.src} alt={img.alt} />
        </div>
      )}
    <section>
      <header>
        {name && <h3>{name}</h3>}
        {title && <span>{title}</span>}
        {location && (
          <span>{`${location.city}, ${location.state ||
            location.country}`}</span>
        )}
      </header>
      {bio && <p dangerouslySetInnerHTML={{ __html: smart(bio) }} />}
    </section>
  </article>
);

TeamCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  bio: PropTypes.string,
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

export default TeamCard;
