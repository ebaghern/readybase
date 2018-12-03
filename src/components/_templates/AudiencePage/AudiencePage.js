import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Layout from 'components/Layout';
import PageHeader from 'components/PageHeader';
import IconBlocks from './sections/AudiencePageIconBlocks';
import HowItWorks from './sections/AudiencePageHowItWorks';
import CallToAction from './sections/AudiencePageCallToAction';

const AudiencePage = ({
  blockClass,
  pageTitle,
  pageHeading,
  pageHeaderContent,
  renderPageHeader,
  iconBlocks,
  howItWorks,
  callToActionHeading,
  callToActionContent,
  callToActionButtonText,
  callToActionButtonProps,
  callToActionChildren
}) => (
  <Layout
    className={cx(blockClass, 'AudiencePage')}
    title={pageTitle}
    headerTheme="light"
  >
    <PageHeader
      className={cx(`${blockClass}__pageHeader`, 'AudiencePage__pageHeader')}
      theme="light"
      heading={pageHeading}
      content={pageHeaderContent}
    >
      {renderPageHeader && ((headerClass) => renderPageHeader(headerClass))}
    </PageHeader>
    <IconBlocks baseClass="AudiencePage" blocks={iconBlocks} />
    <HowItWorks baseClass="AudiencePage" blocks={howItWorks} />
    {children && children('AudiencePage')}
    <CallToAction
      baseClass="AudiencePage"
      heading={callToActionHeading}
      content={callToActionContent}
      buttonText={callToActionButtonText}
      buttonProps={callToActionButtonProps}
    />
    {callToActionChildren && callToActionChildren('AudiencePage')}
  </Layout>
);

AudiencePage.propTypes = {
  renderPageHeader: PropTypes.func,
  children: PropTypes.func,
  iconBlocks: PropTypes.shape({
    heading: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      })
    ])
  }),
  howItWorks: PropTypes.shape({
    heading: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      })
    ])
  }).isRequired,
  callToActionHeading: PropTypes.string,
  callToActionContent: PropTypes.string,
  callToActionButtonProps: PropTypes.object, // @todo: define shape
  callToActionChildren: PropTypes.func
};

AudiencePage.defaultProps = {
  pageTitle: 'ReadyBase'
};

export default AudiencePage;
