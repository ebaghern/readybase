import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import Header from './sections/ReferralHeader';
import IconBlocks from './sections/ReferralIconBlocks';
import TextBlocks from './sections/ReferralTextBlocks';
import Accordions from './sections/ReferralAccordions';

const HEADER_THEME = 'light';
const HEADING = `Referral Program`;
const CONTENT = `We built our refferal program for folks that want to do freelance sales/recruiting or are already busy with existing work and want a portion of the sale.`;

const Referral = () => (
  <Layout className="Referral" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <IconBlocks />
    <TextBlocks />
    <Accordions />
  </Layout>
);

export default Referral;
