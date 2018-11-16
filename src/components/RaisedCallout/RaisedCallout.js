import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './RaisedCallout.scss';

const RaisedCallout = ({ children, className }) => {
  const baseClass = 'RaisedCallout';
  return <div className={cx(baseClass, className)}>{children(baseClass)}</div>;
};

RaisedCallout.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default RaisedCallout;
