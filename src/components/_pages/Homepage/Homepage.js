import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Layout from 'components/Layout';
import Button from 'components/Button';
import CardSlider from 'components/CardSlider';
import EmailSignupForm from 'components/EmailSignupForm';
import ImageTextBlock from 'components/ImageTextBlock';
import PageHeader from 'components/PageHeader';
import RaisedCallout from 'components/RaisedCallout';
import TeamCard from 'components/TeamCard';
import TestimonialCard from 'components/TestimonialCard';
import TestimonialCredit from 'components/TestimonialCredit';
import teamMembers from 'data/team';
import testimonials from 'data/testimonials';
import ImageGoodCompany from 'static/images/img_good_company.svg';
import ImageVetted from 'static/images/img_based_vetted.svg';
import ImageTalentManager from 'static/images/img_talent_manager.svg';
import ImageLongTerm from 'static/images/img_long_term.svg';
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
    <section className="Homepage__team">
      <h2 className="screen-reader-text">Readybase team</h2>
      {teamMembers &&
        teamMembers.map(({ id, bio, ...teamProps }) => (
          <TeamCard key={id} {...teamProps} />
        ))}
    </section>

    <section className="Homepage__testimonials">
      <header>
        <h2>What our clients are saying</h2>
        <p>Humpty dumpty had a great fall</p>
      </header>

      {testimonials && (
        <CardSlider className="Homepage__testimonialSlider">
          {testimonials.map(({ id, location, ...testimonialProps }) => (
            <TestimonialCard key={id} {...testimonialProps} />
          ))}
        </CardSlider>
      )}
    </section>

    <div className="Homepage__imageTextBlocks">
      <ImageTextBlock
        className="Homepage__imageTextBlock"
        heading="You're in good company"
        image={<ImageGoodCompany />}
        content={(smart) => (
          <>
            <p>
              {smart(
                `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui's officia.`
              )}
            </p>
            <TestimonialCredit name="John Doe" title="EVP of Sales" />
            <Button>Gain Access a Freelancer</Button>
          </>
        )}
      />
      <ImageTextBlock
        className="Homepage__imageTextBlock"
        heading="Freelancers vetted by us, ready for you"
        image={<ImageVetted />}
        content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
      />
      <ImageTextBlock
        className="Homepage__imageTextBlock"
        heading="Talent manager to help manage your freelance team"
        image={<ImageTalentManager />}
        content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
      />
      <ImageTextBlock
        className="Homepage__imageTextBlock"
        heading="Long-term and short-term gigs from 6 months to 3 days"
        image={<ImageLongTerm />}
        content={(smart) => (
          <>
            <p>
              {smart(
                `Nisi proin posuere senectus viverra montes nunc in euismod congue, duis lorem litora varius aliquet lobortis vitae quisque netus ante, ornare phasellus malesuada sodales gravida nibh cubilia morbi.`
              )}
            </p>
            <Button>Gain Access a Freelancer</Button>
          </>
        )}
      />
    </div>
    <section className="Homepage__callout">
      <RaisedCallout>
        {(baseClass) => (
          <>
            <h2
              className={cx(
                `${baseClass}__heading`,
                'Homepage__calloutHeading'
              )}
            >
              Get more done with freelancer power.
              <br />{' '}
              Make your impact, Build Your Vision
            </h2>
            <div
              className={cx(
                `${baseClass}__contentWrapper`,
                'Homepage__calloutContent'
              )}
            >
              <Button>Gain Access to a Freelancer</Button>
              <Button>Become a ReadyBase Freelancer</Button>
            </div>
          </>
        )}
      </RaisedCallout>
    </section>
  </Layout>
);

export default Index;
