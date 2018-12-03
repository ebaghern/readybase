import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import smart from 'lib/utils/smartContent';
import PageSection from 'components/PageSection';
import RaisedCallout from 'components/RaisedCallout';
import Button from 'components/Button';
import bem from 'lib/utils/sharedBemElementClass';

const AudiencePageCallToAction = ({
  baseClass,
  heading,
  content,
  children,
  buttonText,
  buttonProps
}) => (
  <PageSection className={bem('callToAction', [baseClass, 'AudiencePage'])}>
    <div className={bem('callToActionInner', [baseClass, 'AudiencePage'])}>
      <RaisedCallout
        showImg={true}
        className={bem('callToActionCallout', [baseClass, 'AudiencePage'])}
      >
        {(calloutClass) => (
          <>
            <h2
              className={cx(
                'AudiencePage__callToActionCalloutHeading',
                `${baseClass}__callToActionCalloutHeading`,
                `${calloutClass}__heading`
              )}
            >
              {smart(heading)}
            </h2>
            <div
              className={cx(
                'AudiencePage__callToActionCalloutContentWrapper',
                `${baseClass}__callToActionCalloutContentWrapper`,
                `${calloutClass}__contentWrapper`
              )}
              dangerouslySetInnerHTML={{ __html: smart(content) }}
            >
              {children && children(baseClass)}
              <Button
                className={cx(
                  'AudiencePage__callToActionButton',
                  `${baseClass}__callToActionButton`,
                  `${calloutClass}__button`
                )}
                {...buttonProps}
              >
                {buttonText}
              </Button>
            </div>
          </>
        )}
      </RaisedCallout>
    </div>
  </PageSection>
);

AudiencePageCallToAction.propTypes = {
  baseClass: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.func,
  buttonText: PropTypes.string,
  buttonProps: PropTypes.object, // @todo: define shape
};

export default AudiencePageCallToAction;
