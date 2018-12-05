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
const HEADING = `For Freelancers`;
const CONTENT = `We find contracts/projects for you, help fill your pipeline, and provide a line of support.`;


const ForFreelancers = () => (
  <Layout
    className="ForFreelancers"
    title="Readybase"
    headerTheme={HEADER_THEME}
    headerButtonText="Become a ReadyBase Freelancer"
    headerButtonLink="become-a-freelancer"
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
