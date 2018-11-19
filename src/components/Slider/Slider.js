import React from 'react';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Slider = ({ settings, className, children }) => {
  const allSettings = {
    ...{
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    },
    ...settings
  };
  return (
    <SlickSlider
      className={cx('Slider', className)}
      {...allSettings}
    >
      {children}
    </SlickSlider>
  );
};

Slider.propTypes = {
  settings: PropTypes.object,
  className: PropTypes.string,
};

export default Slider;
