import React from 'react';
import Button from 'components/Button';
import PageSection from 'components/PageSection';
import RaisedCallout from 'components/RaisedCallout';
import IconTextBlock from 'components/IconTextBlock';

const BLOCKS = [
  // @todo Get content from Eamon
  {
    heading: '1. Apply as a ReadyBase Freelancer.',
    icon: {
      src: 'static/images/img_apply_freelancer.svg',
      alt: ''
    }
  },
  {
    heading: '2. Evaluate if we’re a good fit for each other.',
    icon: {
      src: 'static/images/img_evaluate_each_other.svg',
      alt: ''
    }
  },
  {
    heading: '3. We find you Freelance gigs.',
    icon: {
      src: 'static/images/img_find_freelance_gigs.svg',
      alt: ''
    }
  }
];

const ForFreelancersHowItWorks = () => (
  <PageSection
    position="first"
    color="pale"
    className="ForFreelancers__howItWorks"
  >
    <RaisedCallout showImg={true} className="ForFreelancers__howItWorksCallout">
      {() => (
        <>
          <h2>How It Works</h2>
          <div className="ForFreelancers__iconBlocksWrapper">
            {BLOCKS.map((blockProps, i) => (
              <IconTextBlock
                {...blockProps}
                key={i}
                className="ForFreelancers__iconBlock"
              />
            ))}
          </div>
          <Button
            href="become-a-freelancer"
            className="ForFreelancers__howItWorksButton"
          >
            Become a ReadyBase Freelancer
          </Button>
        </>
      )}
    </RaisedCallout>
  </PageSection>
);

export default ForFreelancersHowItWorks;
