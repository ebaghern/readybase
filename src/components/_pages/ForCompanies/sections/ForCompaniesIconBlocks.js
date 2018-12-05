import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import PageSection from 'components/PageSection';
import IconTextBlock from 'components/IconTextBlock';

const BLOCKS = [
  // @todo Get content from Eamon
  {
    heading: 'Long Term or Short Term Contracts',
    content: `Whether its a 6 month contractors or a 3 week design project.`,
    icon: {
      src: 'static/images/img_long_term_contract.svg',
      alt: ''
    }
  },
  {
    heading: 'Get a Team Manager for Free',
    content: `Get feedback/consulting from your freelance team and HR Support.`,
    icon: {
      src: 'static/images/img_get_team.svg',
      alt: ''
    }
  },
  {
    heading: 'Pay Per Hour for Freelancers',
    content: `You only pay what the freelancer costs per hour. ReadyBase manages payroll and invoicing.`,
    icon: {
      src: 'static/images/img_pay_perhour.svg',
      alt: ''
    }
  }
];

const ForCompaniesIconBlocks = (props) => (
  <PageSection className="ForCompanies__iconBlocks">
    <div className="ForCompanies__iconBlocksWrapper">
      {BLOCKS.map((blockProps, i) => (
        <IconTextBlock
          {...blockProps}
          key={i}
          className="ForCompanies__iconBlock"
        />
      ))}
    </div>
    <Button
      href="access-freelancers"
      className="ForCompanies__iconBlocksButton"
    >
      Gain Access to Freelancers
    </Button>
  </PageSection>
);

export default ForCompaniesIconBlocks;
