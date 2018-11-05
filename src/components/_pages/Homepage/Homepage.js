import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import EmailSignupForm from 'components/EmailSignupForm';
import TeamCard from 'components/TeamCard';
import TestimonialCard from 'components/TestimonialCard';
import teamMembers from 'data/team';
import testimonials from 'data/testimonials';
import './Homepage.scss';

const HEADER_THEME = 'dark';
const HEADING = `Meet the perfect freelancers for your projects.`;
const CONTENT = `We'll help you find developers, data scientists, and designers that fit seamlessly with your project needs and culture.`;

const Index = () => (
  <Layout className="Homepage" title="Readybase" headerTheme={HEADER_THEME}>
    <PageHeader
      className="Homepage__pageHeader"
      theme={HEADER_THEME}
      heading={HEADING}
      content={CONTENT}
    >
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
                <strong>Apply Now</strong>
              </a>
            </Link>
          </p>
        </>
      )}
    </PageHeader>
    <section>
      <h2>Readybase team</h2>
      <div>
        {teamMembers &&
          teamMembers.map(({ id, bio, ...teamProps }) => (
            <TeamCard key={id} {...teamProps} />
          ))}
      </div>
    </section>
    <section>
      <header>
        <h2>What our clients are saying</h2>
        <p>Humpty dumpty had a great fall</p>
      </header>

      <div>
        {testimonials &&
          testimonials.map(({ id, location, ...testimonialProps }) => (
            <TestimonialCard key={id} {...testimonialProps} />
          ))}
      </div>
    </section>
  </Layout>
);

export default Index;
