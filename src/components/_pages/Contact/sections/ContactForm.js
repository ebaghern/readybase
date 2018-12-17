import React, { PureComponent } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Button from 'components/Button';
import Input from 'components/Input';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const FORM_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long!')
    .required('Name is required'),
  firstName: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long!')
    .required('Name is required'),
  org: Yup.string()
    .min(2, 'Too Short!')
    .max(60, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
});

class ContactForm extends PureComponent {
  render() {
    return (
      <section className="Contact__formSection">
        <Formik
          validationSchema={FORM_SCHEMA}
          initialValues={{
            email: '',
            name: '',
            companyName: '',
            comments: ''
          }}
          onSubmit={sendDataToDrip}
          render={({ touched, errors }) => (
            <Form className="Contact__form">
              <Input
                className="Contact__input"
                type="text"
                name="name"
                label="Your Name"
                autoComplete="off"
                errors={errors.name}
                touched={touched.name}
              />
              <Input
                className="Contact__input"
                type="email"
                name="email"
                label="Your Email Address"
                autoComplete="off"
                errors={errors.email}
                touched={touched.email}
              />
              <Input
                className="Contact__input"
                type="text"
                name="companyName"
                label="Your Organization"
                autoComplete="off"
                errors={errors.companyName}
                touched={touched.companyName}
              />
              <Input
                component="textarea"
                className="Contact__textArea"
                name="comments"
                label="What kind of freelancer talent do you need?"
                autoComplete="off"
                errors={errors.comments}
                touched={touched.comments}
              />
              <Button htmlType="submit" className="Contact__button">
                Send
              </Button>
            </Form>
          )}
        />
      </section>
    );
  }
}

export default ContactForm;
