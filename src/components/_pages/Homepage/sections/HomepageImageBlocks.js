import React from 'react';
import Button from 'components/Button';
import ImageTextBlock from 'components/ImageTextBlock';
import TestimonialCredit from 'components/TestimonialCredit';
import PageSection from 'components/PageSection';

const BLOCKS = [
  {
    heading: `A freelancer base vetted by us. Ready for you.`,
    content: (smart) => (
      <>
        <p>
          {smart(
            `Pre-vetted through our battle-tested process on personality, communication, experience, and skillset.`
          )}
        </p>
      </>
    ),
    image: {
      src: 'static/images/img_good_company.svg',
      alt: ''
    }
  },
  {
    heading: `Pick and choose your team. At a moment's notice.`,
    content:
      `Freelancers to tackle problems without overextending your full-time team. Increase and decrease your freelancer team size, easily.`,
    image: {
      src: 'static/images/img_based_vetted.svg',
      alt: ''
    }
  },
  {
    heading: `Talent manager to help manage your freelance team. Free.`,
    content:
      'Bi-weekly freelancer check-ins, continued support, and critical updates on freelancers and their feedback.',
    image: {
      src: 'static/images/img_talent_manager--fix.svg',
      alt: ''
    }
  },
  {
    heading: `Long-term and short-term gigs. From 6 months to 3 days`,
    content: (smart) => (
      <>
        <p>
          {smart(
            `A 100% flexible workforce to engage when you need it.`
          )}
        </p>
        <Button>Gain Access to Freelancers</Button>
      </>
    ),
    image: {
      src: 'static/images/img_long_term--fix.svg',
      alt: ''
    }
  }
];

const HomepageImageBlocks = () => (
  <div className="Homepage__imageTextBlocks">
    {BLOCKS.map((blockProps, i, arr) => {
      return (
        <PageSection
          key={i}
          className="Homepage__imageTextBlockWrapper"
          position={i === 0 ? 'first' : i === arr.length - 2 && 'last'}
          color={i !== arr.length - 1 && 'pale'}
        >
          <ImageTextBlock
            className="Homepage__imageTextBlock"
            {...blockProps}
          />
        </PageSection>
      );
    })}
  </div>
);

export default HomepageImageBlocks;
