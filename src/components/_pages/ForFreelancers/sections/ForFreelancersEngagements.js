import React from 'react';
import smart from 'lib/utils/smartContent';
import PageSection from 'components/PageSection';

const BLOCKS = [
  {
    heading: `Fulltime Contract`,
    content: `You’ll work on a 40 hour per week contract over a period of time.`
  },
  {
    heading: `Part-time Contract`,
    content: `This usually is around 16-20 hours per week of work, but sometimes can vary.`
  },
  {
    heading: `Hourly, as Needed`,
    content: `We offer hourly engagements as well, although theses are our rarest offerings.`
  }
];

const ForFreelancersEngagements = (props) => (
  <PageSection
    color="pale"
    position="last"
    className="ForFreelancers__engagements"
  >
    <div className="ForFreelancers__engagementsInner">
      <h2 className="ForFreelancers__engagementsHeading">
        Types of Engagements
      </h2>
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
    </div>
  </PageSection>
);

export default ForFreelancersEngagements;
