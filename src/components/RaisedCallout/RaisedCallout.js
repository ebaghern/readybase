import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const RaisedCallout = ({ children, className, showImg }) => {
  const baseClass = 'RaisedCallout';
  return (
    <div
      className={cx(className, baseClass, {
        [`${baseClass}--flare`]: showImg
      })}
    >
      {children(baseClass)}
    </div>
  );
};

RaisedCallout.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  showImg: PropTypes.bool
};

export default RaisedCallout;
