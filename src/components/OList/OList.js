import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import elementType from 'lib/propTypes/validation-elementType';
import './OList.scss';

const OList = ({ children }) => (
  <ol className="OList">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, {
        className: cx('OList__item', child.props.className)
      })
    )}
  </ol>
);

OList.propTypes = {
  children: PropTypes.oneOfType([
    elementType('li'),
    PropTypes.arrayOf(elementType('li'))
  ])
};

export default OList;
