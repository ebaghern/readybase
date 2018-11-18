import React from 'react';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';

const ForCompaniesHeader = (props) => (
  <PageHeader className="ForCompanies__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'ForCompanies__signupForm')}
          buttonText="Gain Access to Freelancers"
        />
      </>
    )}
  </PageHeader>
);

export default ForCompaniesHeader;
