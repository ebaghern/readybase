import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Header from './sections/ForFreelancersHeader';
import Types from './sections/ForFreelancersTypes';
import HowItWorks from './sections/ForFreelancersHowItWorks';
import IconBlocks from './sections/ForFreelancersIconBlocks';
import Engagements from './sections/ForFreelancersEngagements';
import CallToAction from './sections/ForFreelancersCallToAction';

const HEADER_THEME = 'light';
const HEADING = `Get freelance projects. We do the all the leg work. You do what you love.`;
const CONTENT = `We help you grow as a freelancer, become your support system, and bring you into our community of freelancers. Once you work with us on a project, we try to keep you at full capacity.`;


const ForFreelancers = () => (
  <Layout
    className="ForFreelancers"
    title="Readybase"
    headerTheme={HEADER_THEME}
    headerButtonText="Become a ReadyBase Freelancer"
    headerButtonLink="apply"
  >
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <IconBlocks />
    <HowItWorks />
    <Types />
    <Engagements />
    <CallToAction />
  </Layout>
);

export default ForFreelancers;
