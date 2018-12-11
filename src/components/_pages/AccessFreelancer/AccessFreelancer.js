import React from 'react';
import Form from 'components/Form';
import Input from 'components/Input';
import TestimonialCard from 'components/TestimonialCard';
import LandingPage from 'components/_templates/LandingPage';

const AccessFreelancer = () => (
  <LandingPage
    className="AccessFreelancer"
    title="Readybase"
    backLink="mission"
  >
    <>
      <h1>Gain Access to a Freelancer</h1>
      <Form buttonText="Get Started">
        {(props) => (
          <>
            <Input
              component="select"
              className="Form__select"
              //type="text"
              name="type"
              label="What Kind of Freelancer talent do you need?"
            >
              <option disabled selected>
                What Kind of Freelancer talent do you need?
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
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

export default AccessFreelancer;
