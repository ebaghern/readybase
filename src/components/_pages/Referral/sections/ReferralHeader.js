import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';
import pushEmailToRoute from 'lib/utils/pushEmailToRoute';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const ReferralHeader = (props) => (
  <PageHeader className="Referral__pageHeader" {...props} />
);

export default ReferralHeader;
