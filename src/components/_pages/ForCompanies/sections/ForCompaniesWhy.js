import React from 'react';
import cx from 'classnames';
import smart from 'lib/utils/smartContent';
import PageSection from 'components/PageSection';
import RaisedCallout from 'components/RaisedCallout';
import Button from 'components/Button';

const HEADING = `Why ReadyBase?`;
const CONTENT = `We’re a group of professional contractors that have decades of experience freelancing with organizations. We bring our past history and knowledge to the table and help you find the right cultural and talent fits based on your need. We’re priced very reasonably for the value; you may find us more effective per hour than most full-time hires.`;
const TAG_LINE = ``;

const ForCompaniesWhy = props => (
  <PageSection className="ForCompanies__why">
    <RaisedCallout showImg={true} className="ForCompanies__whyCallout">
      {baseClass => (
        <>
          <h2
            className={cx('ForCompanies__whyHeading', `${baseClass}__heading`)}
          >
            {smart(HEADING)}
          </h2>
          <div
            className={cx(
              `${baseClass}__contentWrapper`,
              'ForCompanies__whyContentWrapper'
            )}
          >
            <p>{smart(CONTENT)}</p>
            <p
              className="ForCompanies__whyTagline"
              dangerouslySetInnerHTML={{ __html: smart(TAG_LINE) }}
            />
            <Button href="hire" className="ForCompanies__whyButton">
              Gain Access to Freelancers
            </Button>
          </div>
        </>
      )}
    </RaisedCallout>
  </PageSection>
);

export default ForCompaniesWhy;
