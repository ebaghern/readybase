import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import RaisedCallout from 'components/RaisedCallout';

const ForFreelancersCallToAction = () => (
  <section className="ForFreelancers__callout">
    <RaisedCallout showImg={true}>
      {(baseClass) => (
        <>
          <h2
            className={cx(
              `${baseClass}__heading`,
              'ForFreelancers__calloutHeading'
            )}
          >
            Ready to Get Started?
          </h2>
          <div
            className={cx(
              `${baseClass}__contentWrapper`,
              'ForFreelancers__calloutContent'
            )}
          >
            <Button href="become-a-freelancer">
              Become a ReadyBase Freelancer
            </Button>
          </div>
        </>
      )}
    </RaisedCallout>
  </section>
);

export default ForFreelancersCallToAction;
