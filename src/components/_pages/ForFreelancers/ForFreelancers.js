import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import RaisedCallout from 'components/RaisedCallout';
import Header from './sections/ForFreelancersHeader';
import IconSales from 'static/images/img_become_sales.svg';
import IconStayFocused from 'static/images/img_stay_focused.svg';
import IconSaveTime from 'static/images/img_save_time.svg';
import IconApply from 'static/images/img_apply_freelancer.svg';
import IconEvaluate from 'static/images/img_evaluate_each_other.svg';
import IconFindGigs from 'static/images/img_find_freelance_gigs.svg';
import './ForFreelancers.scss';

const HEADER_THEME = 'light';
const HEADING = `For Freelancers`;
const CONTENT = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;
const ICON_GROUP = [
  // @todo Get content from Eamon
  {
    heading: 'We become your sales team',
    content: `Whether its a 6 month contractors or a 3 week design project.`,
    icon: <IconSales />
  },
  {
    heading: 'Stay focused on your skills',
    content: `Get feedback/consulting from your freelance team and HR Support.`,
    icon: <IconStayFocused />
  },
  {
    heading: 'Save time on invoicing and admin',
    content: `You only pay what the freelancer costs per hour. ReadyBase manages payroll and invoicing.`,
    icon: <IconSaveTime />
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

const ForFreelancers = () => (
  <Layout
    className="ForFreelancers"
    title="Readybase"
    headerTheme={HEADER_THEME}
  >
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <section className="ForFreelancers__iconBlocks">
      <div className="ForFreelancers__iconBlocksWrapper">
        {ICON_GROUP.map((blockProps, i) => (
          <IconTextBlock
            {...blockProps}
            key={i}
            className="ForFreelancers__iconBlock"
          />
        ))}
        <div className="ForFreelancers__iconBlocksButton">
          <Button>Become a ReadyBase Freelancer</Button>
        </div>
      </div>
    </section>
    <section className="ForFreelancers__howItWorks">
      <RaisedCallout>
        {() => (
          <>
            <h2>How It Works</h2>
            <div className="ForFreelancers__iconBlocksWrapper">
              {HOW_IT_WORKS.map((blockProps, i) => (
                <IconTextBlock
                  {...blockProps}
                  key={i}
                  className="ForFreelancers__iconBlock"
                />
              ))}
              <div className="ForFreelancers__iconBlocksButton">
                <Button>Become a ReadyBase Freelancer</Button>
              </div>
            </div>
          </>
        )}
      </RaisedCallout>
    </section>
  </Layout>
);

export default ForFreelancers;
