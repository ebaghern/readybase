import React from 'react';
import TestimonialCard from 'components/TestimonialCard';
import LandingPage from 'components/_templates/LandingPage';

const CallConfirmed = () => (
  <LandingPage className="CallConfirmed" title="Readybase">
    <>
      <h1>Confirmed!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra imperdiet posuere. Suspendisse sapien eros, aliquam et consequat vel, aliquet a mi.</p>
      {/* Calendly integration */}
    </>
    <>
      <TestimonialCard
        className="LandingPage__testimonial CallConfirmed__testimonial"
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

export default CallConfirmed;
