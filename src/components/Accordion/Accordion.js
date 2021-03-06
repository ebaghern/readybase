import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as Acc } from 'react-accessible-accordion';
import classNames from 'classnames';

const Accordion = ({ className, children, accordion, onChange }) => {
  return (
    <Acc
      className={classNames('Accordion', className)}
      accordion={accordion}
      onChange={onChange}
    >
      {children}
    </Acc>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
  accordion: PropTypes.bool,
  onChange: PropTypes.func
};

Accordion.defaultProps = {
  accordion: true
};

export default Accordion;
