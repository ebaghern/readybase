import React from 'react';
import Layout from 'components/Layout';
import Header from './sections/ContactHeader';
import Form from './sections/ContactForm';

const HEADER_THEME = 'light';
const HEADING = `Contact Us`;
const CONTENT = `Shoot us a line and let us know how can we help. All you have to do is use the contact form below and hit 'send'.`;

const Contact = () => (
  <Layout className="Contact" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <Form />
  </Layout>
);

export default Contact;
