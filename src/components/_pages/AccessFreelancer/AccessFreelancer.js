import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Form from 'components/Form';
import Input from 'components/Input';
import TestimonialCard from 'components/TestimonialCard';
import LandingPage from 'components/_templates/LandingPage';
import validateEmail from 'lib/utils/validateEmail';

class AccessFreelancer extends Component {
  static async getInitialProps({ query }) {
    const { email } = await query;
    return { email };
  }

  handleFormSubmit = async (data, { setSubmitting }) => {
    const res = await fetch(`/api/v1/forms/drip`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      // alert('You fucked up!'); // @todo error handling, obviously...
    }
  };

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
            initialValues={{ email: validateEmail(email) ? email : '' }}
            onSubmit={this.handleFormSubmit}
          >
            {(formProps) => (
              <>
                <Input
                  component="select"
                  className="Form__select"
                  name="freelancerType"
                  label="What Kind of Freelancer talent do you need?"
                  defaultValue={0}
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
                />
                <Input
                  className="Form__input"
                  type="text"
                  name="name"
                  label="Your Name"
                  autoComplete="off"
                />
                <Input
                  className="Form__input"
                  type="email"
                  name="email"
                  label="Your Email"
                  autoComplete="off"
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
