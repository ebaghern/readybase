import React from 'react';
import Layout from 'components/Layout';
import IconBlocks from './sections/HomepageIconBlocks';
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
  <Layout className="Homepage" title="ReadyBase - Hire Tech Freelancers, Vetted by Tech Freelancers" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <Team teamMembers={teamMembers} />
    <Testimonials testimonials={testimonials} />
    <IconBlocks />
    <ImageBlocks />
    <CallToAction />
  </Layout>
);

export default Homepage;
