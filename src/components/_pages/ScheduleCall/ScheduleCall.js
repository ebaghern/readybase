import React from 'react';
import TestimonialCard from 'components/TestimonialCard';
import ClientRender from 'components/ClientRender';
import LandingPage from 'components/_templates/LandingPage';

const ScheduleCall = () => (
  <LandingPage className="ScheduleCall" title="Readybase">
    <>
      <h1>Schedule a Call</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra
        imperdiet posuere. Suspendisse sapien eros, aliquam et consequat vel,
        aliquet a mi.
      </p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/readybase-s/start-hiring-freelancers"
        style={{ minWidth: 320 }}
      />
      <ClientRender>
        <script src="https://assets.calendly.com/assets/external/widget.js" />
      </ClientRender>
    </>
    <>
      <TestimonialCard
        className="LandingPage__testimonial ScheduleCall__testimonial"
        imgLocation="top"
        img={{
          src: 'https://picsum.photos/200/200',
          alt: 'John headshot',
        }}
        name="Joan O. Ark"
        title="Human testi"
        content="Nisi imperdiet venenatis sollicitudin curae augue potenti convallis dignissim, commodo vitae nunc interdum accumsan id magna, at senectus tempor donec mi hendrerit diam."
      />
    </>
  </LandingPage>
);

export default ScheduleCall;
