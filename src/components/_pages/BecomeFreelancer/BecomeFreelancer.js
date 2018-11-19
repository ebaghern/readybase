import React from 'react';
import EmailSignupForm from 'components/EmailSignupForm';
import TestimonialCard from 'components/TestimonialCard';
import LandingPage from 'components/_templates/LandingPage';

const BecomeFreelancer = () => (
  <LandingPage className="BecomeFreelancer" title="Readybase">
    <>
      <h1>Become a ReadyBase Freelancer</h1>
      <p>Coming Soon!</p>
      <p>Get notified when it's ready</p>
      <EmailSignupForm />
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

export default BecomeFreelancer;
