import React from 'react';
import PageSection from 'components/PageSection';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';

const ICON_GROUP = [
  // @todo Get content from Eamon
  {
    heading: 'We Become Your Sales Team',
    content: `Finding you projects, work, and keeping you busy.`,
    icon: {
      src: 'static/images/img_become_sales.svg',
      alt: ''
    }
  },
  {
    heading: 'Stay Focused on Your Skills',
    content: `...and not on learning how to do invoicing, sales, and everything else.`,
    icon: {
      src: 'static/images/img_stay_focused.svg',
      alt: ''
    }
  },
  {
    heading: 'Save Time on Invoicing and Admin',
    content: `Maximize your number of billable hours in a week.`,
    icon: {
      src: 'static/images/img_save_time.svg',
      alt: ''
    }
  }
];

const ForFreelancersIconBlocks = () => (
  <PageSection className="ForFreelancers__iconBlocks">
    <div className="ForFreelancers__iconBlocksWrapper">
      {ICON_GROUP.map((blockProps, i) => (
        <IconTextBlock
          {...blockProps}
          key={i}
          className="ForFreelancers__iconBlock"
        />
      ))}
    </div>
    <Button
      href="become-a-freelancer"
      className="ForFreelancers__iconBlocksButton"
    >
      Become a ReadyBase Freelancer
    </Button>
  </PageSection>
);

export default ForFreelancersIconBlocks;
