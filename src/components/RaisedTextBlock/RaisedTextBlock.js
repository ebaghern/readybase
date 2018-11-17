import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './RaisedTextBlock.scss';

const RaisedTextBlock = ({ children, className }) => {
  const baseClass = 'RaisedTextBlock';
  return <div className={cx(baseClass, className)}>{children(baseClass)}</div>;
};

RaisedTextBlock.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default RaisedTextBlock;
