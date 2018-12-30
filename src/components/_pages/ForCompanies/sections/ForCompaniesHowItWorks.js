import React from 'react';
import Button from 'components/Button';
import PageSection from 'components/PageSection';
import RaisedCallout from 'components/RaisedCallout';
import IconTextBlock from 'components/IconTextBlock';

const BLOCKS = [
  // @todo Get content from Eamon
  {
    heading: '1. Gain access.',
    content: `Use our "gain access to freelancers" button to get started.`,
    icon: {
      src: 'static/images/img_apply_freelancer.svg',
      alt: ''
    }
  },
  {
    heading: '2. Tell us your need.',
    content: `Tell us about what you're looking for. We'll schedule a call to get further info.`,
    icon: {
      src: 'static/images/img_evaluate_each_other.svg',
      alt: ''
    }
  },
  {
    heading: '3. We match the freelancer.',
    content: `Based on culture fit, skill set, and timeline need.`,
    icon: {
      src: 'static/images/img_find_freelance_gigs.svg',
      alt: ''
    }
  }
];

const ForCompaniesHowItWorks = (props) => (
  <PageSection
    position="first"
    color="pale"
    className="ForCompanies__howItWorks"
  >
    <RaisedCallout showImg={true} className="ForCompanies__howItWorksCallout">
      {() => (
        <>
          <h2>How It Works</h2>
          <div className="ForCompanies__iconBlocksWrapper">
            {BLOCKS.map((blockProps, i) => (
              <IconTextBlock
                {...blockProps}
                key={i}
                className="ForCompanies__iconBlock"
              />
            ))}
          </div>
          <Button
            href="hire"
            className="ForCompanies__howItWorksButton"
          >
            Gain Access to Freelancers
          </Button>
        </>
      )}
    </RaisedCallout>
  </PageSection>
);

export default ForCompaniesHowItWorks;
