import React from 'react';
import Layout from 'components/Layout';
import Header from './sections/ForCompaniesHeader';
import IconBlocks from './sections/ForCompaniesIconBlocks';
import Compare from './sections/ForCompaniesCompare';
import Investment from './sections/ForCompaniesInvestment';
import HowItWorks from './sections/ForCompaniesHowItWorks';
import Why from './sections/ForCompaniesWhy';

const HEADER_THEME = 'light';
const HEADING = `Hire freelancers to complete projects, without all the hastle.`;
const CONTENT = `We match your needs to our pre-vetted bench of tech freelancers. We handle payroll, the contract agreements, and all of the fine details that goes with hiring a freelancer.`;

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
