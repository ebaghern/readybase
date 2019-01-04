import React from 'react';
import PageSection from 'components/PageSection';
import Button from 'components/Button';
import Accordion, {
  AccordionItem,
  AccordionItemBody,
  AccordionItemTitle,
} from 'components/Accordion';

const ACCORDIONS = [
  {
    tabTitle: `How much income can I earn?`,
    tabContent: `We share the same amount in referral fees that we do our full-time sales staff. The amount depends on the size of project, duration of contract, and rate/level of freelancer that we need.`,
  },
  {
    tabTitle: `What do I need to get started?`,
    tabContent: `Use the "Join Referral Program" button to get started. We'll send a few documents your way; then you're all set!`,
  }
];

const ReferralAccordions = props => (
  <PageSection color="pale" position="last" className="Referral__accordions">
    <h2 className="Referral__accordionsHeading">FAQs</h2>
    <Accordion className="Referral__accordion" accordion={true}>
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
      <Button href="contact">Contact Us and Get Started</Button>
    </div>
  </PageSection>
);

export default ReferralAccordions;
