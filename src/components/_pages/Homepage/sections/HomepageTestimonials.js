import React from 'react';
import CardSlider from 'components/CardSlider';
import TestimonialCard from 'components/TestimonialCard';

const HomepageTestimonials = ({ testimonials }) => (
  <section className="Homepage__testimonials">
    <header>
      <h2>What our clients are saying</h2>
      <p>Humpty dumpty had a great fall</p>
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
