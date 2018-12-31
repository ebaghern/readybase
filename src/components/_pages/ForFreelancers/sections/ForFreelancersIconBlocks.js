import React from 'react';
import Button from 'components/Button';
import PageSection from 'components/PageSection';
import IconTextBlock from 'components/IconTextBlock';
import Donut from 'static/images/oval.svg';

const ICON_GROUP = [
  // @todo Get content from Eamon
  {
    heading: 'We Become Your Sales Team',
    content: `Finding you projects, work, and keeping you busy.`,
    icon: {
      src: 'static/images/img_become_sales.svg',
      alt: '',
    },
  },
  {
    heading: 'Stay Focused on Your Skills',
    content: `...and not on learning how to do invoicing, sales, and everything else.`,
    icon: {
      src: 'static/images/img_stay_focused.svg',
      alt: '',
    },
  },
  {
    heading: 'Save Time on Invoicing and Admin',
    content: `Maximize your number of billable hours in a week.`,
    icon: {
      src: 'static/images/img_save_time.svg',
      alt: '',
    },
  },
];

const ForFreelancersIconBlocks = () => (
  <PageSection
    className="ForFreelancers__iconBlocks"
    renderBelowWrapper={() => (
      <div className="ForFreelancers__iconBlocksDonuts" aria-hidden>
        <Donut className="ForFreelancers__iconBlocksDonut" />
        <Donut className="ForFreelancers__iconBlocksDonut" />
      </div>
    )}
  >
    <div className="ForFreelancers__iconBlocksWrapper">
      {ICON_GROUP.map((blockProps, i) => (
        <IconTextBlock
          {...blockProps}
          key={i}
          className="ForFreelancers__iconBlock"
        />
      ))}
    </div>
    <Button href="apply" className="ForFreelancers__iconBlocksButton">
      Become a ReadyBase Freelancer
    </Button>
  </PageSection>
);

export default ForFreelancersIconBlocks;
