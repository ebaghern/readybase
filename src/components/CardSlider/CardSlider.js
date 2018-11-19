import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Slider from 'components/Slider';
import breakpoints from 'lib/data/breakpoints';

const CardSlider = ({ settings, className, children }) => {
  const allSettings = {
    ...{
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: breakpoints.large - 1,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    },
    ...settings
  };
  return (
    <div className={cx(className, 'CardSlider')}>
      <Slider settings={allSettings}>
        {React.Children.map(children, (child, i) => (
          <div key={i} className="CardSlider__card">
            <div className="CardSlider__cardInner">{child}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

CardSlider.propTypes = {
  settings: PropTypes.object,
  className: PropTypes.string
};

export default CardSlider;
