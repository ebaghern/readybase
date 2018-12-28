import React from 'react';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';
import pushEmailToRoute from 'lib/utils/pushEmailToRoute';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const ForCompaniesHeader = (props) => (
  <PageHeader className="ForCompanies__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'ForCompanies__signupForm')}
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

export default ForCompaniesHeader;
