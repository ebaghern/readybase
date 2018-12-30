import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';
import pushEmailToRoute from 'lib/utils/pushEmailToRoute';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const ReferralHeader = (props) => (
  <PageHeader className="Referral__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'Referral__signupForm')}
          buttonText="Gain Access to Freelancers"
          onSubmit={(values) => {
            pushEmailToRoute('hire', values.email);
            sendDataToDrip(values);
          }}
        />
      </>
    )}
  </PageHeader>
);

export default ReferralHeader;
