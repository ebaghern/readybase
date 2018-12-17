import React from 'react';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';
import pushEmailToRoute from 'lib/utils/pushEmailToRoute';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const ForFreelancersHeader = (props) => (
  <PageHeader className="ForFreelancers__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'ForFreelancers__signupForm')}
          buttonText="Become a ReadyBase Freelancer"
          onSubmit={(values) => {
            pushEmailToRoute('become-a-freelancer', values.email);
            sendDataToDrip(values);
          }}
        />
      </>
    )}
  </PageHeader>
);

export default ForFreelancersHeader;
