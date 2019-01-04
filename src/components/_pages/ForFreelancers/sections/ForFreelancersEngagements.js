import React from 'react';
import smart from 'lib/utils/smartContent';
import PageSection from 'components/PageSection';

const BLOCKS = [
  {
    heading: `Full-time Contract`,
    content: `40 hour per week contracts over a period of time.`,
  },
  {
    heading: `Part-time Contract`,
    content: `Between 10-30 hours per week of work.`,
  },
  {
    heading: `Hourly, as Needed`,
    content: `Short amounts of works on a needs basis.`,
  },
];

const ForFreelancersEngagements = props => (
  <PageSection
    color="pale"
    position="last"
    className="ForFreelancers__engagements"
  >
    <h2 className="ForFreelancers__engagementsHeading">Types of Engagements</h2>
    <div className="ForFreelancers__engagementsWrapper">
      {BLOCKS.map(({ heading, content }, i) => (
        <div key={i} className="ForFreelancers__engagementsBlock">
          <h3 className="ForFreelancers__engagementsBlockHeading">
            {smart(heading)}
          </h3>
          <p className="ForFreelancers__engagementsBlockContent">
            {smart(content)}
          </p>
        </div>
      ))}
    </div>
  </PageSection>
);

export default ForFreelancersEngagements;
