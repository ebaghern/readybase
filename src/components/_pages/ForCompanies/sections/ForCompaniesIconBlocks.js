import React from 'react';
import Button from 'components/Button';
import PageSection from 'components/PageSection';
import IconTextBlock from 'components/IconTextBlock';
import Donut from 'static/images/oval.svg';

const BLOCKS = [
  // @todo Get content from Eamon
  {
    heading: 'Long Term or Short Term Contracts',
    content: `Whether it's a 6 month contract or a 3 week design project.`,
    icon: {
      src: 'static/images/img_long_term_contract.svg',
      alt: '',
    },
  },
  {
    heading: 'Get a Team Manager for Free',
    content: `Get feedback/consulting from your freelance team and HR Support.`,
    icon: {
      src: 'static/images/img_get_team.svg',
      alt: '',
    },
  },
  {
    heading: 'Pay Per Hour for Freelancers',
    content: `You only pay what the freelancer costs per hour. ReadyBase manages payroll and invoicing.`,
    icon: {
      src: 'static/images/img_pay_perhour.svg',
      alt: '',
    },
  },
];

const ForCompaniesIconBlocks = props => (
  <PageSection
    className="ForCompanies__iconBlocks"
    renderBelowWrapper={() => (
      <div className="ForCompanies__iconBlocksDonuts" aria-hidden>
        <Donut className="ForCompanies__iconBlocksDonut" />
        <Donut className="ForCompanies__iconBlocksDonut" />
      </div>
    )}
  >
    <div className="ForCompanies__iconBlocksWrapper">
      {BLOCKS.map((blockProps, i) => (
        <IconTextBlock
          {...blockProps}
          key={i}
          className="ForCompanies__iconBlock"
        />
      ))}
    </div>
    <Button href="hire" className="ForCompanies__iconBlocksButton">
      Gain Access to Freelancers
    </Button>
  </PageSection>
);

export default ForCompaniesIconBlocks;
