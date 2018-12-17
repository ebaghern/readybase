import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const Input = ({
  className,
  component,
  children,
  label,
  showLabel,
  errors,
  touched,
  placeholder,
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
    >
      {children}
    </Field>
    {errors && touched && <div className="Input__errors">{errors}</div>}
  </label>
);

Input.defaultProps = {
  showLabel: false
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  errors: PropTypes.node
};

export default Input;
