import React from 'react';
import EmailSignupForm from 'components/EmailSignupForm';
import TestimonialCard from 'components/TestimonialCard';
import LandingPage from 'components/_templates/LandingPage';
import validateEmail from 'lib/utils/validateEmail';

const BecomeFreelancer = ({ email }) => (
  <LandingPage
    className="BecomeFreelancer"
    title="Become a ReadyBase Freelancer"
  >
    <>
      <p>Coming Soon!</p>
      <p className="BecomeFreelancer__getNotified">
        Get notified when it's ready
      </p>
      <EmailSignupForm
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
