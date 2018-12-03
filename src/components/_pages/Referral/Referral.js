import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import RaisedTextBlock from 'components/RaisedTextBlock';
import Accordion, {
  AccordionItem,
  AccordionItemBody,
  AccordionItemTitle
} from 'components/Accordion';
import Header from './sections/ReferralHeader';

const HEADER_THEME = 'light';
const HEADING = `Referral Program`;
const CONTENT = `We built our refferal program for folks that want to do freelance sales/recruiting or are already busy with existing work and want a portion of the sale. It's structured so that it can pay at the same rate as a full-time Opportunity.`;
const ICON_GROUP = [
  {
    heading: 'Get Project Done',
    content: `New initiatives that will grow your company.`,
    icon: {
      src: 'static/images/img_join_program.svg',
      alt: ''
    }
  },
  {
    heading: 'Move work of your plate',
    content: `Delegates tasks to a pre-vetted network of freelancers.`,
    icon: {
      src: 'static/images/img_send_leads.svg',
      alt: ''
    }
  },
  {
    heading: 'Gain an Extandable team',
    content: `A  whole new team of resources. Without distracting your company.`,
    icon: {
      src: 'static/images/img_earn_money.svg',
      alt: ''
    }
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
const ACCORDIONS = [
  // @todo: get content from Eamon.
  {
    tabTitle: `How much income are we Talking?`,
    tabContent: `We share the same amount in referral fees that we do our full-time sales staff. The amount depends on the size of project, duration of contract, and rate/level of freelancer that we need.`
  },
  {
    tabTitle: `What i need todo to get started?`,
    tabContent: `We share the same amount in referral fees that we do our full-time sales staff. The amount depends on the size of project, duration of contract, and rate/level of freelancer that we need.`
  },
  {
    tabTitle: `Who is eligible to this program?`,
    tabContent: `We share the same amount in referral fees that we do our full-time sales staff. The amount depends on the size of project, duration of contract, and rate/level of freelancer that we need.`
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
        <Button href="become-a-freelancer">Become a ReadyBase Freelancer</Button>
      </div>
    </section>
    <section className="Referral__accordions">
      <h2 className="Referral__accordionsHeading">FAQs</h2>
      <Accordion
        className="Referral__accordion"
        accordion={true}
      >
        {ACCORDIONS.map(({ tabTitle, tabContent }, i) => {
          return (
            <AccordionItem
              className="Referral__accordionItem"
              key={i}
              uuid={`${tabTitle}_${i}`}
            >
              <AccordionItemTitle className="Referral__accordionItemTitle">
                <h4 className="Referral__accordionHeading">{tabTitle}</h4>
              </AccordionItemTitle>
              <AccordionItemBody className="Referral__accordionItemBody">
                <div>{tabContent}</div>
              </AccordionItemBody>
            </AccordionItem>
          );
        })}
      </Accordion>
      <div className="Referral__accordionsButton">
        <Button href="access-freelancers">Gain Access to a Freelancer</Button>
      </div>
    </section>
  </Layout>
);

export default Referral;
