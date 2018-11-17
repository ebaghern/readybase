import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import RaisedTextBlock from 'components/RaisedTextBlock';
import Header from './sections/ReferralHeader';
import IconJoinProgram from 'static/images/img_join_program.svg';
import IconSendLeads from 'static/images/img_send_leads.svg';
import IconEarnMoney from 'static/images/img_earn_money.svg';
import './Referral.scss';

const HEADER_THEME = 'light';
const HEADING = `Referral Program`;
const CONTENT = `We built our refferal program for folks that want to do freelance sales/recruiting or are already busy with existing work and want a portion of the sale. It's structured so that it can pay at the same rate as a full-time Opportunity.`;
const ICON_GROUP = [
  {
    heading: 'Get Project Done',
    content: `New initiatives that will grow your company.`,
    icon: <IconJoinProgram />
  },
  {
    heading: 'Move work of your plate',
    content: `Delegates tasks to a pre-vetted network of freelancers.`,
    icon: <IconSendLeads />
  },
  {
    heading: 'Gain an Extandable team',
    content: `A  whole new team of resources. Without distracting your company.`,
    icon: <IconEarnMoney />
  }
];
const TEXT_BLOCKS = [
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

const Referral = () => (
  <Layout className="Referral" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <section className="Referral__iconBlocks">
      <h2>How It Works</h2>
      <div className="Referral__iconBlocksWrapper">
        {ICON_GROUP.map((blockProps, i) => (
          <IconTextBlock
            {...blockProps}
            key={i}
            className="Referral__iconBlock"
          />
        ))}
      </div>
    </section>
    <section className="Referral__textBlocks">
      {TEXT_BLOCKS.map(({ heading, content }, i) => (
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
      <div className="Referral__textBlocksButton">
        <Button>Become a ReadyBase Freelancer</Button>
      </div>
    </section>
  </Layout>
);

export default Referral;
