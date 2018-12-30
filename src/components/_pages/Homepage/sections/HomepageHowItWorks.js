import React from 'react';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import PageSection from 'components/PageSection';
import Donut from 'static/images/right-donut.svg';

const BLOCKS = [
  {
    heading: '1. Gain access.',
    content: `Use our “Gain access to freelancers” button to get started.`,
    icon: {
      src: 'static/images/img_gain_access.svg',
      alt: '',
    },
  },
  {
    heading: '2. Tell us your need.',
    content: `Tell us what you're looking for. We’ll schedule a call to get further info.`,
    icon: {
      src: 'static/images/img_your_need.svg',
      alt: '',
    },
  },
  {
    heading: '3. Get a quality freelancer.',
    content: `Based on culture fit, skillset, and timeline need.`,
    icon: {
      src: 'static/images/img_find_freelancer.svg',
      alt: '',
    },
  },
];

const HomepageHowItWorks = () => {
  const renderBlocks = group =>
    group.map((blockProps, i) => (
      <IconTextBlock {...blockProps} key={i} className="Homepage__iconBlock" />
    ));
  return (
    <div>
      <Donut className="Homepage__howItWorksDonut" aria-hidden />
      <PageSection
        className="Homepage__howItWorks Homepage__iconBlocks"
        wrapChildren={true}
      >
        <h2 className="Homepage__iconBlocksHeading">How It Works</h2>
        <div className="Homepage__iconBlocksWrapper">
          {renderBlocks(BLOCKS)}
        </div>
        <Button href="hire">Gain Access to Freelancers</Button>
      </PageSection>
    </div>
  );
};

export default HomepageHowItWorks;
