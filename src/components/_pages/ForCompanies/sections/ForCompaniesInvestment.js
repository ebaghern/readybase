import React from 'react';
import smart from 'lib/utils/smartContent';
import PageSection from 'components/PageSection';
import Button from 'components/Button';

const HEADING = `What’s my investment?`;
const CONTENT_TOP = `You only pay the hourly rate of the freelancer.`;
const CONTENT_BOTTOM = `We have simple, transparent pricing with discounts if you hire remote workers and international freelancers.`;

const ForCompaniesInvestment = props => (
  <PageSection
    position="last"
    color="pale"
    className="ForCompanies__investment"
  >
    <h2 className="ForCompanies__investmentHeading">{smart(HEADING)}</h2>
    <p>{smart(CONTENT_TOP)}</p>
    <p>{smart(CONTENT_BOTTOM)}</p>
    <Button href="hire" className="ForCompanies__investmentButton">
      Gain Access to Freelancers
    </Button>
  </PageSection>
);

export default ForCompaniesInvestment;
