import React, { Component } from 'react';
import Head from 'next/head';
import TestimonialCard from 'components/TestimonialCard';
import ClientRender from 'components/ClientRender';
import LandingPage from 'components/_templates/LandingPage';

class ScheduleCall extends Component {
  render() {
    return (
      <LandingPage className="ScheduleCall" title="Schedule a Call">
        <>
          <ClientRender timeout={500} onSSR={<span>Loading...</span>}>
            <Head>
              <script src="https://assets.calendly.com/assets/external/widget.js" />
            </Head>
          </ClientRender>
          <div
            className="ScheduleCall__calendlyWidget calendly-inline-widget"
            data-url="https://calendly.com/readybase-s/start-hiring-freelancers"
          />
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
  }
}
export default ScheduleCall;
