import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Header from './sections/MissionHeader';
import Button from 'components/Button';
import IconTextBlock from 'components/IconTextBlock';
import RaisedCallout from 'components/RaisedCallout';

const HEADER_THEME = 'light';
const HEADING = `Mission and Core Values`;
const SUB_HEADING = `ReadyBase is changing how organizations build teams.`;
const CONTENT = `We built ReadyBase so that we could start and run business completely or mostly powered Freelancers. `;

const ICON_GROUP = [
  {
    heading: 'Self-employed mentality',
    content: `Don’t just do the work. Crush it.`,
    icon: {
      src: 'static/images/img_self_employed.svg',
      alt: ''
    }
  },
  {
    heading: 'Change the game',
    content: `If the game can't be won, change the game until it can be.`,
    icon: {
      src: 'static/images/img_change_game.svg',
      alt: ''
    }
  },
  {
    heading: 'Always be learning',
    content: `There’s always more to learn and further to grow learning is a lifelong journey.`,
    icon: {
      src: 'static/images/img_learning.svg',
      alt: ''
    }
  },
  {
    heading: '2 parts confidence, 1 part humanity',
    content: `Grow confident in your ability, and keep the ego in check.`,
    icon: {
      src: 'static/images/img_2confidence.svg',
      alt: ''
    }
  }
];

const Mission = () => (
  <Layout className="Mission" title="Readybase" headerTheme={HEADER_THEME}>
    <Header
      theme={HEADER_THEME}
      subHeading={SUB_HEADING}
      heading={HEADING}
      content={CONTENT}
    />
    <section className="Mission__callout">
      <RaisedCallout>
        {(baseClass) => (
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
    </section>
  </Layout>
);

export default Mission;
