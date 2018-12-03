import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import RaisedTextBlock from 'components/RaisedTextBlock';
import PageSection from 'components/PageSection';

const BLOCKS = [
  {
    heading: 'Earn money by sending us leads',
    content: `Whether its a six-month contractor position or a project, earn a commission for sending a warm lead to us. It's a great way of earning extra income.`
  },
  {
    heading: 'Earn money by sending us a freelancer',
    content: `Sometimes we don't have the perfect fit for a project or contract. We'll reach out to folks in our referral program about these freelancer needs. If you help us find the right person, we'll share a portion of the revenue.`
  },
  {
    heading: 'An email introduction is all it takes',
    content: `All you need to do is send a prospective client an introduction to us or introduce us to the potential freelancer. We'll take care of all the work from there!`
  },
  {
    heading: 'Get a piece of every paid for a hour',
    content: `We’ll send a portion of every invoice that gets paid directly to you via ACH or check.`
  }
];

const ReferralIconBlocks = (props) => (
  <PageSection color="pale" position="first" className="Referral__textBlocks">
    <div className="Referral__textBlocksInner">
      {BLOCKS.map(({ heading, content }, i) => (
        <RaisedTextBlock className="Referral__textBlock" key={i}>
          {(baseClass) => (
            <>
              <h4
                className={cx(
                  `${baseClass}__heading`,
                  'Referral__textBlockHeading'
                )}
              >
                {heading}
              </h4>
              <p
                className={cx(
                  `${baseClass}__content`,
                  'Referral__textBlockContent'
                )}
              >
                {content}
              </p>
            </>
          )}
        </RaisedTextBlock>
      ))}
    </div>
    <Button className="Referral__textBlocksButton" href="become-a-freelancer">
      Become a ReadyBase Freelancer
    </Button>
  </PageSection>
);

export default ReferralIconBlocks;
