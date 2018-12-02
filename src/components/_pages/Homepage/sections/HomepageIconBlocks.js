import React from 'react';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import PageSection from 'components/PageSection';

const iconGroupA = [
  {
    heading: 'Get Projects Done',
    content: `New initiatives that will grow your company.`,
    icon: {
      src: 'static/images/img_get_project_done.svg',
      alt: ''
    }
  },
  {
    heading: 'Move Work Off Your plate',
    content: `Delegates tasks to a pre-vetted network of freelancers.`,
    icon: {
      src: 'static/images/img_move_work.svg',
      alt: ''
    }
  },
  {
    heading: 'Gain an Extendable team',
    content: `A whole new team of resources. Without distracting your company.`,
    icon: {
      src: 'static/images/img_gain_team.svg',
      alt: ''
    }
  }
];

const iconGroupB = [
  {
    heading: '1. Gain access',
    content: `Use our “Gain access to freelancers” button to get started.`,
    icon: {
      src: 'static/images/img_gain_access.svg',
      alt: ''
    }
  },
  {
    heading: '2. Tell us your need',
    content: `Tell us what you're looking for. We’ll schedule a call to get further info.`,
    icon: {
      src: 'static/images/img_your_need.svg',
      alt: ''
    }
  },
  {
    heading: '3. We find the freelancer',
    content: `Based on culture fit, skillset, and timeline need.`,
    icon: {
      src: 'static/images/img_find_freelancer.svg',
      alt: ''
    }
  }
];

const HomepageIconBlocks = () => {
  const renderBlocks = (group) =>
    group.map((blockProps, i) => (
      <IconTextBlock {...blockProps} key={i} className="Homepage__iconBlock" />
    ));
  return (
    <>
      <PageSection className="Homepage__iconBlocks">
        <div className="Homepage__iconBlocksWrapper">
          {renderBlocks(iconGroupA)}
        </div>
        <Button>Gain Access to Freelancers</Button>
      </PageSection>
      <PageSection className="Homepage__iconBlocks">
        <h2 className="Homepage__iconBlocksHeading">How It works</h2>
        <div className="Homepage__iconBlocksWrapper">
          {renderBlocks(iconGroupB)}
        </div>
        <Button>Gain Access to Freelancers</Button>
      </PageSection>
    </>
  );
};

export default HomepageIconBlocks;
