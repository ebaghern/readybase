import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';


import Header from './sections/ForFreelancersHeader';
import Types from './sections/ForFreelancersTypes';
import HowItWorks from './sections/ForFreelancersHowItWorks';
import IconBlocks from './sections/ForFreelancersIconBlocks';
import './ForFreelancers.scss';

const HEADER_THEME = 'light';
const HEADING = `For Freelancers`;
const CONTENT = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;


const ForFreelancers = () => (
  <Layout
    className="ForFreelancers"
    title="Readybase"
    headerTheme={HEADER_THEME}
  >
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <IconBlocks />
    <HowItWorks />
    <Types />
  </Layout>
);

export default ForFreelancers;
