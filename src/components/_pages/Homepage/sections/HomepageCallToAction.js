import React from 'react';
import cx from 'classnames';
import Button from 'components/Button';
import RaisedCallout from 'components/RaisedCallout';

const HomepageCallToAction = () => (
  <section className="Homepage__callout">
    <RaisedCallout>
      {(baseClass) => (
        <>
          <h2
            className={cx(`${baseClass}__heading`, 'Homepage__calloutHeading')}
          >
            Get more done with freelancer power.
            <br /> Make your impact, Build Your Vision
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
);

export default HomepageCallToAction;
