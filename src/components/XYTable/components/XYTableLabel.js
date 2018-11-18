import React from 'react';
import PropTypes from 'prop-types';
import ReadybaseLogo from 'static/images/readybase-logo.svg';

const XYTableLabel = ({ children }) =>
  children === 'ReadyBase' ? (
    <>
      <ReadybaseLogo aria-hidden className="XYTable__logo" />
      <span className="screen-reader-text">{children}</span>
    </>
  ) : (
    children
  );

XYTableLabel.propTypes = {
  children: PropTypes.string.isRequired
};

export default XYTableLabel;
