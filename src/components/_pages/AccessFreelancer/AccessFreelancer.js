import React, { Component } from 'react';
import * as Yup from 'yup';
import Form from 'components/Form';
import Input from 'components/Input';
import TestimonialCard from 'components/TestimonialCard';
import LandingPage from 'components/_templates/LandingPage';
import validateEmail from 'lib/utils/validateEmail';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const FORM_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(50, 'Too Long!')
    .required('Name is required'),
  companyName: Yup.string()
    .min(2, 'Too Short!')
    .max(60, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
});

class AccessFreelancer extends Component {
  static async getInitialProps({ query }) {
    const { email } = await query;
    return { email };
  }

  render() {
    const { email } = this.props;
    return (
      <LandingPage
        className="AccessFreelancer"
        title="Gain Access to a Freelancer"
      >
        <>
          <Form
            buttonText="Get Started"
            initialValues={{
              email: validateEmail(email) ? email : '',
              freelancerType: 0,
              companyName: '',
              name: ''
            }}
            onSubmit={sendDataToDrip}
            schema={FORM_SCHEMA}
          >
            {({ errors, touched }) => (
              <>
                <Input
                  component="select"
                  className="Form__select"
                  name="freelancerType"
                  label="What Kind of Freelancer talent do you need?"
                >
                  <option value={0} disabled>
                    What Kind of Freelancer talent do you need?
                  </option>
                  <option value={1}>Option 2</option>
                  <option value={2}>Option 3</option>
                </Input>
                <Input
                  className="Form__input"
                  type="text"
                  name="companyName"
                  label="Company Name"
                  autoComplete="off"
                  errors={errors.companyName}
                  touched={touched.companyName}
                />
                <Input
                  className="Form__input"
                  type="text"
                  name="name"
                  label="Your Name"
                  autoComplete="off"
                  errors={errors.name}
                  touched={touched.name}
                />
                <Input
                  className="Form__input"
                  type="email"
                  name="email"
                  label="Your Email"
                  autoComplete="off"
                  errors={errors.email}
                  touched={touched.email}
                />
              </>
            )}
          </Form>
        </>
        <>
          <TestimonialCard
            className="LandingPage__testimonial AccessFreelancer__testimonial"
            imgLocation="top"
            img={{
              src: 'https://picsum.photos/200/200',
              alt: 'John headshot'
            }}
            name="Joan O. Ark"
            title="Human testi"
            content="Nisi imperdiet venenatis sollicitudin curae augue potenti convallis dignissim, commodo vitae nunc interdum accumsan id magna, at senectus tempor donec mi hendrerit diam."
          />
        </>
      </LandingPage>
    );
  }
}

export default AccessFreelancer;
