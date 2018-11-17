import React from 'react';
import PropTypes from 'prop-types';
import smart from 'lib/utils/smartContent';
import './TeamCard.scss';

const TeamCard = ({ name, title, img, location, bio }) => (
  <article className="TeamCard" aria-labelledby="">
    {img &&
      img.src && (
        <div className="TeamCard__imgWrapper">
          <img className="TeamCard__img" src={img.src} alt={img.alt} />
        </div>
      )}
    <div className="TeamCard__contentWrapper">
      <header className="TeamCard__header">
        {name && <h3 className="TeamCard__name">{name}</h3>}
        {title && <span className="TeamCard__jobTitle">{title}</span>}
        {location && (
          <span className="TeamCard__location">{`${
            location.city
          }, ${location.state || location.country}`}</span>
        )}
      </header>
      {bio && (
        <p
          className="TeamCard__bio"
          dangerouslySetInnerHTML={{ __html: smart(bio) }}
        />
      )}
    </div>
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