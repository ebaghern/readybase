import React from 'react';
import Layout from 'components/Layout';
import Benefits from './sections/HomepageBenefits';
import HowItWorks from './sections/HomepageHowItWorks';
import ImageBlocks from './sections/HomepageImageBlocks';
import CallToAction from './sections/HomepageCallToAction';
import Header from './sections/HomepageHeader';
import Team from './sections/HomepageTeam';
import Testimonials from './sections/HomepageTestimonials';
import teamMembers from 'data/team';
import testimonials from 'data/testimonials';

const HEADER_THEME = 'dark';
const HEADING = `Gain a powerful network of freelancers with just your email address.`;
const CONTENT = `Find developers, data scientists, and designers to take on special projects with the support of our talent team.
Matched to your culture and needs.`;

const Homepage = () => (
  <Layout
    className="Homepage"
    title="ReadyBase - Hire Tech Freelancers, Vetted by Tech Freelancers"
    headerTheme={HEADER_THEME}
  >
    <Header
      theme={HEADER_THEME}
      heading={HEADING}
      content={CONTENT}
      showDonuts={true}
      donutCount={5}
    />
    <Team teamMembers={teamMembers} />
    <Testimonials testimonials={testimonials} />
    <Benefits />
    <HowItWorks />
    <ImageBlocks />
    <CallToAction />
  </Layout>
);

export default Homepage;
