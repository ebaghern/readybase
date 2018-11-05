import React from 'react';
import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import EmailSignupForm from 'components/EmailSignupForm';

const THEME = 'dark';
const HEADING = `Meet the perfect freelancers for your projects.`;
const CONTENT = `We'll help you find developers, data scientists, and designers that fit seamlessly with your project needs and culture.`;

const Index = () => (
  <Layout className="Homepage" title="Readybase" headerTheme={THEME}>
    <PageHeader
      className="Homepage__pageHeader"
      theme={THEME}
      heading={HEADING}
      content={CONTENT}
    >
      <EmailSignupForm
        className="Homepage__signupForm"
        buttonText="Gain Access to Freelancers"
      />
    </PageHeader>
  </Layout>
);

export default Index;
