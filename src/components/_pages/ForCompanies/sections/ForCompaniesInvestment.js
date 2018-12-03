import React from 'react';
import smart from 'lib/utils/smartContent';
import PageSection from 'components/PageSection';
import Button from 'components/Button';

const HEADING = `What’s My Investment?`;
const CONTENT = `You pay per hour for freelancer team, with discounted rates the longer
the contract is. Most of the time, ReadyBase is the same price as
bringing on a freelancer directly. We provide long term opportunities
and work for our freelancers, and they typically give us better pricing.`;

const ForCompaniesInvestment = (props) => (
  <PageSection
    position="last"
    color="pale"
    className="ForCompanies__investment"
  >
    <div className="ForCompanies__investmentInner">
      <h2 className="ForCompanies__investmentHeading">{smart(HEADING)}</h2>
      <p>{smart(CONTENT)}</p>
      <Button className="ForCompanies__investmentButton">Gain Access to Freelancers</Button>
    </div>
  </PageSection>
);

export default ForCompaniesInvestment;
