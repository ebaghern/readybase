import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import RaisedCallout from 'components/RaisedCallout';
import Header from './sections/ForCompaniesHeader';
import Compare from './sections/ForCompaniesCompare';
import IconContract from 'static/images/img_long_term_contract.svg';
import IconGetTeam from 'static/images/img_get_team.svg';
import IconPay from 'static/images/img_pay_perhour.svg';
import IconApply from 'static/images/img_apply_freelancer.svg';
import IconEvaluate from 'static/images/img_evaluate_each_other.svg';
import IconFindGigs from 'static/images/img_find_freelance_gigs.svg';

const HEADER_THEME = 'light';
const HEADING = `For Companies`;
const CONTENT = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;
const ICON_GROUP = [
  // @todo Get content from Eamon
  {
    heading: 'Long Term or Short Term Contract',
    content: `Whether its a 6 month contractors or a 3 week design project.`,
    icon: <IconContract />
  },
  {
    heading: 'Get a Team Manager for Free',
    content: `Get feedback/consulting from your freelance team and HR Support.`,
    icon: <IconGetTeam />
  },
  {
    heading: 'Pay per Hour for Freelancer',
    content: `You only pay what the freelancer costs per hour. ReadyBase manages payroll and invoicing.`,
    icon: <IconPay />
  }
];
const HOW_IT_WORKS = [
  // @todo Get content from Eamon
  {
    heading: '1. Apply as a ReadyBase Freelancer',
    content: `Harum quidem rerum facilis est et expedita distinctio.`,
    icon: <IconApply />
  },
  {
    heading: '2. Evaluate if we’re a good fit for each other',
    content: `Harum quidem rerum facilis est et expedita distinctio.`,
    icon: <IconEvaluate />
  },
  {
    heading: '3. We find you Freelance gigs',
    content: `Harum quidem rerum facilis est et expedita distinctio.`,
    icon: <IconFindGigs />
  }
];



const ForCompanies = () => (
  <Layout className="ForCompanies" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <section className="ForCompanies__iconBlocks">
      <div className="ForCompanies__iconBlocksWrapper">
        {ICON_GROUP.map((blockProps, i) => (
          <IconTextBlock
            {...blockProps}
            key={i}
            className="ForCompanies__iconBlock"
          />
        ))}
      </div>
    </section>
    <section className="ForCompanies__howItWorks">
      <RaisedCallout>
        {() => (
          <>
            <h2>How It Works</h2>
            <div className="ForCompanies__iconBlocksWrapper">
              {HOW_IT_WORKS.map((blockProps, i) => (
                <IconTextBlock
                  {...blockProps}
                  key={i}
                  className="ForCompanies__iconBlock"
                />
              ))}
            </div>
          </>
        )}
      </RaisedCallout>
    </section>
    <Compare />
  </Layout>
);

export default ForCompanies;
