import React from 'react';
import Layout from 'components/Layout';
import Header from './sections/ForCompaniesHeader';
import IconBlocks from './sections/ForCompaniesIconBlocks';
import Compare from './sections/ForCompaniesCompare';
import Investment from './sections/ForCompaniesInvestment';
import HowItWorks from './sections/ForCompaniesHowItWorks';
import Why from './sections/ForCompaniesWhy';

const HEADER_THEME = 'light';
const HEADING = `For Companies`;
const CONTENT = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;

const ForCompanies = () => (
  <Layout className="ForCompanies" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <IconBlocks />
    <HowItWorks />
    <Compare />
    <Investment />
    <Why />
  </Layout>
);

export default ForCompanies;
