import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import EmailSignupForm from 'components/EmailSignupForm';
import PageHeader from 'components/PageHeader';

const HomepageHeader = (props) => (
  <PageHeader className="Homepage__pageHeader" {...props}>
    {(headerClass) => (
      <>
        <EmailSignupForm
          className={cx(`${headerClass}__form`, 'Homepage__signupForm')}
          buttonText="Gain Access to Freelancers"
        />
        <p style={{ marginTop: 40 }}>
          Are you a freelancer?{' '}
          <Link href="#">
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
