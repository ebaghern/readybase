import React from 'react';
import CardSlider from 'components/CardSlider';
import TestimonialCard from 'components/TestimonialCard';
// import SliderDots from 'components/Slider/components/SliderDots';
import Donut from 'static/images/ic_circle_graphic_purple.svg';

const HomepageTestimonials = ({ testimonials }) => (
  <section className="Homepage__testimonials">
    <header className="Homepage__testimonialsHeader">
      <h2>You're in good company.</h2>
      <p>Companies like yours use ReadyBase to get projects completed and scale their team.</p>
      {/* @todo <SliderDots currentSlide="" slideCount={testimonials.length} /> */}
    </header>

    {testimonials && (
      <CardSlider
        className="Homepage__testimonialSlider"
      >
        {testimonials.map(({ id, location, ...testimonialProps }) => (
          <TestimonialCard key={id} {...testimonialProps} />
        ))}
      </CardSlider>
    )}
    <Donut className="Homepage__testimonialsDonut" />
  </section>
);

export default HomepageTestimonials;
