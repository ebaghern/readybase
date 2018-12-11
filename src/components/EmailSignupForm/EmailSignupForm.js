import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form, Field } from 'formik';
import Button from 'components/Button';

const EmailSignupForm = ({
  className,
  buttonText,
  onSubmit,
  initialValues
}) => (
  <div className={cx(className, 'EmailSignupForm')}>
    <Formik
      initialValues={{
        email: '',
        ...initialValues
      }}
      onSubmit={onSubmit}
      render={(props) => (
        <Form className="EmailSignupForm__form">
          <Field
            className="EmailSignupForm__input"
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="off"
          />
          <Button htmlType="submit" className="EmailSignupForm__button">
            {buttonText}
          </Button>
        </Form>
      )}
    />
  </div>
);

EmailSignupForm.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object
};

EmailSignupForm.defaultProps = {
  buttonText: 'Submit',
  onSubmit: () => {},
  initialValues: {}
};

export default EmailSignupForm;
