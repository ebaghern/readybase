import React from 'react';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';

const ICON_GROUP = [
  // @todo Get content from Eamon
  {
    heading: 'We become your sales team',
    content: `Whether its a 6 month contractors or a 3 week design project.`,
    icon: {
      src: 'static/images/img_become_sales.svg',
      alt: ''
    }
  },
  {
    heading: 'Stay focused on your skills',
    content: `Get feedback/consulting from your freelance team and HR Support.`,
    icon: {
      src: 'static/images/img_stay_focused.svg',
      alt: ''
    }
  },
  {
    heading: 'Save time on invoicing and admin',
    content: `You only pay what the freelancer costs per hour. ReadyBase manages payroll and invoicing.`,
    icon: {
      src: 'static/images/img_save_time.svg',
      alt: ''
    }
  }
];

const ForFreelancersIconBlocks = () => (
  <section className="ForFreelancers__iconBlocks">
    <div className="ForFreelancers__iconBlocksWrapper">
      {ICON_GROUP.map((blockProps, i) => (
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
  </section>
);

export default ForFreelancersIconBlocks;
