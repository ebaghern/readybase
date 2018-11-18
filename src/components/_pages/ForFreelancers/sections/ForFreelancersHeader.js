import React from 'react';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';

const ForFreelancersHeader = (props) => (
  <PageHeader className="ForFreelancers__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'ForFreelancers__signupForm')}
          buttonText="Become a ReadyBase Freelancer"
        />
      </>
    )}
  </PageHeader>
);

export default ForFreelancersHeader;
