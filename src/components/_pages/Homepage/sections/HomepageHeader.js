import React from 'react';
import Link from 'components/Link';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';
import pushEmailToRoute from 'lib/utils/pushEmailToRoute';
import sendDataToDrip from 'lib/data/sendDataToDrip';

const HomepageHeader = (props) => (
  <PageHeader className="Homepage__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'Homepage__signupForm')}
          buttonText="Gain Access to Freelancers"
          onSubmit={(values) => {
            pushEmailToRoute('hire', values.email);
            sendDataToDrip(values);
          }}
        />
        <p style={{ marginTop: 40 }}>
          Are you a freelancer?{' '}
          <Link href="apply">
            <a>
              <strong>Apply.</strong>
            </a>
          </Link>
        </p>
      </>
    )}
  </PageHeader>
);

export default HomepageHeader;
