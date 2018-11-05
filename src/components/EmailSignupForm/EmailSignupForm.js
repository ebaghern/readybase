import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form, Field } from 'formik';
import Button from 'components/Button';

const EmailSignupForm = ({ className, buttonText }) => (
  <div className={cx(className, 'EmailSignupForm')}>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={(props) => (
        <Form className="EmailSignupForm__form">
          <Field
            className="EmailSignupForm__input"
            type="email"
            name="email"
            placeholder="Your Email Address"
            autocomplete="off"
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
  buttonText: PropTypes.string
};

EmailSignupForm.defaultProps = {
  buttonText: 'Submit'
};

export default EmailSignupForm;
