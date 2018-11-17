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
import './Homepage.scss';

const HEADER_THEME = 'dark';
const HEADING = `Meet the perfect freelancers for your projects.`;
const CONTENT = `We'll help you find developers, data scientists, and designers that fit seamlessly with your project needs and culture.`;

const Homepage = () => (
  <Layout className="Homepage" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <Team teamMembers={teamMembers} />
    <Testimonials testimonials={testimonials} />
    <IconBlocks />
    <ImageBlocks />
    <CallToAction />
  </Layout>
);

export default Homepage;
