import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import RaisedTextBlock from 'components/RaisedTextBlock';
import PageSection from 'components/PageSection';

const BLOCKS = [
  {
    heading: 'Earn Money By Sending Excess Work',
    content: `Whether it's a six-month contractor position or a project, earn a commission for sending a warm lead to us. It's a great way of earning extra income.`,
  },
  {
    heading: 'Earn Money By Sending Freelancers',
    content: `Sometimes we don't have the perfect fit for a project or contract. We'll reach out to folks in our referral program about these freelancer needs. If you help us find the right person, we'll share a portion of the revenue.`,
  },
  {
    heading: 'An Email Introduction Is All It Takes',
    content: `All you need to do is send a prospective client an introduction to us or introduce us to the potential freelancer. We'll take care of all the work from there!`,
  },
  {
    heading: 'Get a Piece of Every Hour',
    content: `We’ll send a portion of every invoice that gets paid directly to you via ACH or check.`,
  },
];

const ReferralIconBlocks = props => (
  <PageSection
    color="pale"
    position="first"
    className="Referral__textBlocks"
    renderBelowWrapper={() => (
      <Button className="Referral__textBlocksButton" href="apply">
        Contact Us and Get Started
      </Button>
    )}
  >
    {BLOCKS.map(({ heading, content }, i) => (
      <RaisedTextBlock className="Referral__textBlock" key={i}>
        {baseClass => (
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
  </PageSection>
);

export default ReferralIconBlocks;
