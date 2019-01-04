import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Header from './sections/MissionHeader';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import RaisedCallout from 'components/RaisedCallout';
import PageSection from 'components/PageSection';

const HEADER_THEME = 'light';
const HEADING = `Mission and Core Values`;
const SUB_HEADING = `ReadyBase is changing how organizations build teams.`;
const CONTENT = `Imagine a workforce that is on-demand, scalable, and can be moved around or re-apportioned at a moment’s notice. That’s our vision of the new, modern workforce.

We think businesses should run using a strategic core team; and then utilize freelancers to complete all the tactical work. It forces the core team to create good process, allows risk-taking on new ventures without fear of layoffs, and makes business decisions investment-based instead of resource allocation.

For the freelancer: we want to provide all the liberties of freelancing without all the drawbacks. Look: all that energy spent finding the next paycheck and chasing invoices is time-consuming and emotionally draining. ReadyBase wants to be able to take that piece of work off a freelancer’s plate and focus-in on what they set out to freelance for: for a worry-free lifestyle and working on what they love.`;

const ICON_GROUP = [
  {
    heading: 'Self-employed mentality',
    content: `Don’t just do the work. Crush it.`,
    icon: {
      src: 'static/images/img_self_employed.svg',
      alt: '',
    },
  },
  {
    heading: 'Change the game',
    content: `If the game can't be won, change the game until it can be.`,
    icon: {
      src: 'static/images/img_change_game.svg',
      alt: '',
    },
  },
  {
    heading: 'Always be learning',
    content: `There’s always more to learn and further to grow. Learning is a lifelong journey.`,
    icon: {
      src: 'static/images/img_learning.svg',
      alt: '',
    },
  },
  {
    heading: '2 parts confidence, 1 part humility',
    content: `Grow confident in your ability, and keep the ego in check.`,
    icon: {
      src: 'static/images/img_2confidence.svg',
      alt: '',
    },
  },
];

const Mission = () => (
  <Layout className="Mission" title="Readybase" headerTheme={HEADER_THEME}>
    <Header
      theme={HEADER_THEME}
      subHeading={SUB_HEADING}
      heading={HEADING}
      content={CONTENT}
    />
    <PageSection className="Mission__callout">
      <RaisedCallout>
        {baseClass => (
          <>
            <h2
              className={cx(`${baseClass}__heading`, 'Mission__calloutHeading')}
            >
              Core Values
            </h2>
            <div
              className={cx(
                `${baseClass}__contentWrapper`,
                'Mission__calloutContent'
              )}
            >
              {ICON_GROUP.map((blockProps, i) => (
                <IconTextBlock
                  {...blockProps}
                  key={i}
                  className="Mission__iconBlock"
                />
              ))}
            </div>
          </>
        )}
      </RaisedCallout>
    </PageSection>
  </Layout>
);

export default Mission;
