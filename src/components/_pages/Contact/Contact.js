import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import PageSection from 'components/PageSection';
import Header from './sections/ContactHeader';
import Form from './sections/ContactForm';

const HEADER_THEME = 'light';
const HEADING = `Contact Us`;
const CONTENT = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;

const Contact = () => (
  <Layout className="Contact" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <PageSection className="Contact__form">
      <Form />
    </PageSection>
  </Layout>
);

export default Contact;
