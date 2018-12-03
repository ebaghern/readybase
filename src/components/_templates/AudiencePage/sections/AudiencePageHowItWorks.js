import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import PageSection from 'components/PageSection';
import RaisedCallout from 'components/RaisedCallout';
import IconTextBlock from 'components/IconTextBlock';
import bem from 'lib/utils/sharedBemElementClass';

const AudiencePageHowItWorks = ({ baseClass, blocks }) => (
  <PageSection
    position="first"
    color="pale"
    className={bem('howItWorks', [baseClass, 'AudiencePage'])}
  >
    <RaisedCallout
      showImg={true}
      className={bem('howItWorksCallout', [baseClass, 'AudiencePage'])}
    >
      {(calloutClass) => (
        <>
          <h2
            className={cx(
              `${calloutClass}__heading`,
              `${baseClass}__howItWorksHeading`,
              'AudiencePage__howItWorksHeading'
            )}
          >
            How It Works
          </h2>
          <div
            className={cx(
              `${calloutClass}__iconBlocksWrapper`,
              `${baseClass}__iconBlocksWrapper`,
              'AudiencePage__iconBlocksWrapper'
            )}
          >
            {blocks.map((blockProps, i) => (
              <IconTextBlock
                {...blockProps}
                key={i}
                className={cx(
                  `${calloutClass}__iconBlock`,
                  `${baseClass}__iconBlock`,
                  'AudiencePage__iconBlock'
                )}
              />
            ))}
          </div>
        </>
      )}
    </RaisedCallout>
  </PageSection>
);

AudiencePageHowItWorks.propTypes = {
  baseClass: PropTypes.shape,
  blocks: PropTypes.shape({
    heading: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      })
    ])
  }).isRequired
};

export default AudiencePageHowItWorks;
