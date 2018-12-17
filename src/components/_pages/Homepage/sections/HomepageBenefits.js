import React from 'react';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import PageSection from 'components/PageSection';

const BLOCKS = [
  {
    heading: 'Get Projects Done',
    content: `New initiatives that will grow your company.`,
    icon: {
      src: 'static/images/img_get_project_done.svg',
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
  },
  {
    heading: 'Move Work Off Your plate',
    content: `Delegates tasks to a pre-vetted network of freelancers.`,
    icon: {
      src: 'static/images/img_move_work.svg',
      alt: ''
    }
  }
];

const HomepageBenefits = () => {
  const renderBlocks = (group) =>
    group.map((blockProps, i) => (
      <IconTextBlock {...blockProps} key={i} className="Homepage__iconBlock" />
    ));
  return (
    <PageSection className="Homepage__benefits Homepage__iconBlocks">
      <div className="Homepage__iconBlocksWrapper">{renderBlocks(BLOCKS)}</div>
      <Button>Gain Access to Freelancers</Button>
    </PageSection>
  );
};

export default HomepageBenefits;
