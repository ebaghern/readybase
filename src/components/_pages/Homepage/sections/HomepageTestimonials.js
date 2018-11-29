import React from 'react';
import CardSlider from 'components/CardSlider';
import TestimonialCard from 'components/TestimonialCard';

const HomepageTestimonials = ({ testimonials }) => (
  <section className="Homepage__testimonials">
    <header>
      <h2>You're In Good Company</h2>
      <p>Companies like yours use ReadyBase to get projects completed.</p>
    </header>

    {testimonials && (
      <CardSlider className="Homepage__testimonialSlider">
        {testimonials.map(({ id, location, ...testimonialProps }) => (
          <TestimonialCard key={id} {...testimonialProps} />
        ))}
      </CardSlider>
    )}
  </section>
);

export default HomepageTestimonials;
