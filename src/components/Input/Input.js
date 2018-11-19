import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Input = ({
  className,
  component,
  label,
  showLabel,
  erorrs,
  touched,
  placeholder,
  showRequiredStar,
  type,
  ...rest
}) => (
  <label className={cx(className, 'Input')}>
    <span
      className={cx({
        Input__label: showLabel,
        'screen-reader-text': !showLabel
      })}
    >
      {label}
    </span>
    <Field
      className={cx('Input__field', {
        [`Input__field--${type}`]: type,
        [`Input__field--${component}`]: component
      })}
      component={component}
      placeholder={!showLabel ? label : placeholder}
      type={type}
      {...rest}
    />
    {erorrs && touched ? <div className="Input__errors">{erorrs}</div> : null}
    {showRequiredStar && <span className="Input__required">*</span>}
  </label>
);

Input.defaultProps = {
  showLabel: false
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  erorrs: PropTypes.node
};

export default Input;
