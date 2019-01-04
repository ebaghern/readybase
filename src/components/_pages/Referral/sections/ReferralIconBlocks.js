import React from 'react';
import PageSection from 'components/PageSection';
import IconTextBlock from 'components/IconTextBlock';

const BLOCKS = [
  {
    heading: '1. Join our program.',
    icon: {
      src: 'static/images/img_join_program.svg',
      alt: ''
    }
  },
  {
    heading: '2. Send work or freelancers.',
    icon: {
      src: 'static/images/img_send_leads.svg',
      alt: ''
    }
  },
  {
    heading: '3. Earn money.',
    icon: {
      src: 'static/images/img_earn_money.svg',
      alt: ''
    }
  }
];

const ReferralIconBlocks = (props) => (
  <PageSection className="Referral__iconBlocks">
    <h2>How It Works</h2>
    <div className="Referral__iconBlocksWrapper">
      {BLOCKS.map((blockProps, i) => (
        <IconTextBlock
          {...blockProps}
          key={i}
          className="Referral__iconBlock"
        />
      ))}
    </div>
  </PageSection>
);

export default ReferralIconBlocks;
