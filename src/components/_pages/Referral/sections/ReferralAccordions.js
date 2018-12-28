import React from 'react';
import PageSection from 'components/PageSection';
import Button from 'components/Button';
import Accordion, {
  AccordionItem,
  AccordionItemBody,
  AccordionItemTitle
} from 'components/Accordion';

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

const ReferralAccordions = (props) => (
  <PageSection color="pale" position="last" className="Referral__accordions">
    <div className="Referral__accordionsInner">
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
        <Button href="hire">Gain Access to a Freelancer</Button>
      </div>
    </div>
  </PageSection>
);

export default ReferralAccordions;
