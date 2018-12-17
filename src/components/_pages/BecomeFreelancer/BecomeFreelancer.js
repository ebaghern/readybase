import React from 'react';
import fetch from 'isomorphic-unfetch';
import EmailSignupForm from 'components/EmailSignupForm';
import TestimonialCard from 'components/TestimonialCard';
import LandingPage from 'components/_templates/LandingPage';
import validateEmail from 'lib/utils/validateEmail';

const handleFormSubmit = async (data, { setSubmitting }) => {
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

const BecomeFreelancer = ({ email }) => (
  <LandingPage className="BecomeFreelancer" title="Readybase">
    <>
      <h1>Become a ReadyBase Freelancer</h1>
      <p>Coming Soon!</p>
      <p className="BecomeFreelancer__getNotified">
        Get notified when it's ready
      </p>
      <EmailSignupForm
        onSubmit={handleFormSubmit}
        initialValues={{ email: validateEmail(email) ? email : '' }}
        className="BecomeFreelancer__form"
      />
    </>
    <>
      <TestimonialCard
        className="LandingPage__testimonial BecomeFreelancer__testimonial"
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

BecomeFreelancer.getInitialProps = async ({ query }) => {
  const { email } = await query;
  return { email };
};

export default BecomeFreelancer;
