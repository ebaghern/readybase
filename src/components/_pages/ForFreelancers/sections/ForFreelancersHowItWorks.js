import React from 'react';
import Button from 'components/Button';
import RaisedCallout from 'components/RaisedCallout';
import IconTextBlock from 'components/IconTextBlock';

const HOW_IT_WORKS = [
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

const ForFreelancersHowItWorks = () => (
  <section className="ForFreelancers__howItWorks">
    <RaisedCallout>
      {() => (
        <>
          <h2>How It Works</h2>
          <div className="ForFreelancers__iconBlocksWrapper">
            {HOW_IT_WORKS.map((blockProps, i) => (
              <IconTextBlock
                {...blockProps}
                key={i}
                className="ForFreelancers__iconBlock"
              />
            ))}
            <div className="ForFreelancers__iconBlocksButton">
              <Button>Become a ReadyBase Freelancer</Button>
            </div>
          </div>
        </>
      )}
    </RaisedCallout>
  </section>
);

export default ForFreelancersHowItWorks;
