import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Formik, Form } from 'formik';
import Input from 'components/Input';
import Button from 'components/Button';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const EmailSignupForm = ({
  className,
  buttonText,
  onSubmit,
  initialValues,
  schema
}) => (
  <div className={cx(className, 'EmailSignupForm')}>
    <Formik
      initialValues={{
        email: '',
        ...initialValues
      }}
      onSubmit={onSubmit}
      validationSchema={schema}
      render={({ touched, errors }) => (
        <Form className="EmailSignupForm__form">
          <Input
            className="EmailSignupForm__input"
            type="email"
            name="email"
            label="Your Email Address"
            autoComplete="off"
            touched={touched.email}
            errors={errors.email}
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
  onSubmit: sendDataToDrip,
  initialValues: {}
};

export default EmailSignupForm;
