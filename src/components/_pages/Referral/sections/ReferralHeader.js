import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';

const ReferralHeader = (props) => (
  <PageHeader className="Referral__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'Referral__signupForm')}
          buttonText="Gain Access to Freelancers"
        />
      </>
    )}
  </PageHeader>
);

export default ReferralHeader;
