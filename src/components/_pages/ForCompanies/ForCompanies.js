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
const CONTENT = `We find freelancers for you, vet them, and help you manage your freelance team.`;

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
