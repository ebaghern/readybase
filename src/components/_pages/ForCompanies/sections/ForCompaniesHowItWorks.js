import React from 'react';
import Button from 'components/Button';
import PageSection from 'components/PageSection';
import RaisedCallout from 'components/RaisedCallout';
import IconTextBlock from 'components/IconTextBlock';

const BLOCKS = [
  // @todo Get content from Eamon
  {
    heading: '1. Apply as a ReadyBase Freelancer',
    content: `Harum quidem rerum facilis est et expedita distinctio.`,
    icon: {
      src: 'static/images/img_apply_freelancer.svg',
      alt: ''
    }
  },
  {
    heading: '2. Evaluate if we’re a good fit for each other',
    content: `Harum quidem rerum facilis est et expedita distinctio.`,
    icon: {
      src: 'static/images/img_evaluate_each_other.svg',
      alt: ''
    }
  },
  {
    heading: '3. We find you Freelance gigs',
    content: `Harum quidem rerum facilis est et expedita distinctio.`,
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
            href="access-freelancers"
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
