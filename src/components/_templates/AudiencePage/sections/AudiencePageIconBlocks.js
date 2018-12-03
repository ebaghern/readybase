import React from 'react';
import PropTypes from 'prop-types';
import PageSection from 'components/PageSection';
import IconTextBlock from 'components/IconTextBlock';
import bem from 'lib/utils/sharedBemElementClass';

const AudiencePageIconBlocks = ({ baseClass, blocks }) => {
  return (
    <PageSection className={bem('iconBlocks', [baseClass, 'AudiencePage'], ['hey'])}>
      <div className={bem('iconBlocksWrapper', [baseClass, 'AudiencePage'])}>
        {blocks.map((blockProps, i) => (
          <IconTextBlock
            {...blockProps}
            key={i}
            className={bem('iconBlock', [baseClass, 'AudiencePage'])}
          />
        ))}
      </div>
    </PageSection>
  );
};

AudiencePageIconBlocks.propTypes = {
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
  }),
};


export default AudiencePageIconBlocks;
