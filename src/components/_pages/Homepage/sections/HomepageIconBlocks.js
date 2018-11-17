import React from 'react';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import IconGetProjectDone from 'static/images/img_get_project_done.svg';
import IconMoveWork from 'static/images/img_move_work.svg';
import IconGainTeam from 'static/images/img_gain_team.svg';
import IconGainAccess from 'static/images/img_gain_access.svg';
import IconYourNeed from 'static/images/img_your_need.svg';
import IconFindFreelancer from 'static/images/img_find_freelancer.svg';

const iconGroupA = [
  {
    heading: 'Get Project Done',
    content: `New initiatives that will grow your company.`,
    icon: <IconGetProjectDone />
  },
  {
    heading: 'Move work of your plate',
    content: `Delegates tasks to a pre-vetted network of freelancers.`,
    icon: <IconMoveWork />
  },
  {
    heading: 'Gain an Extandable team',
    content: `A  whole new team of resources. Without distracting your company.`,
    icon: <IconGainTeam />
  }
];

const iconGroupB = [
  {
    heading: 'Gain Access',
    content: `Use our “Gain access to freelancers” button to get started.`,
    icon: <IconGainAccess />
  },
  {
    heading: 'Tell us your need',
    content: `Tell us about what you're looking for. We’ll schedule a call to get further info.`,
    icon: <IconYourNeed />
  },
  {
    heading: 'We find the freelancer',
    content: `Based on culture fit, skillset, and timeline need.`,
    icon: <IconFindFreelancer />
  }
];

const HomepageIconBlocks = () => {
  const renderBlocks = (group) =>
    group.map((blockProps, i) => (
      <IconTextBlock {...blockProps} key={i} className="Homepage__iconBlock" />
    ));
  return (
    <>
      <section className="Homepage__iconBlocks">
        <div className="Homepage__iconBlocksWrapper">
          {renderBlocks(iconGroupA)}
        </div>
        <Button>Gain Access a Freelancer</Button>
      </section>
      <section className="Homepage__iconBlocks">
        <h2 className="Homepage__iconBlocksHeading">How It works?</h2>
        <div className="Homepage__iconBlocksWrapper">
          {renderBlocks(iconGroupB)}
        </div>
        <Button>Gain Access a Freelancer</Button>
      </section>
    </>
  );
};

export default HomepageIconBlocks;
