import React from 'react';
import Button from 'components/Button';
import ImageTextBlock from 'components/ImageTextBlock';
import TestimonialCredit from 'components/TestimonialCredit';
import PageSection from 'components/PageSection';

const BLOCKS = [
  {
    heading: `You're in good company`,
    content: (smart) => (
      <>
        <p>
          {smart(
            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui's officia.`
          )}
        </p>
        <TestimonialCredit name="John Doe" title="EVP of Sales" />
        <Button>Gain Access to Freelancers</Button>
      </>
    ),
    image: {
      src: 'static/images/img_good_company.svg',
      alt: ''
    }
  },
  {
    heading: `A freelancer base vetted by us. Ready for you.`,
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
    image: {
      src: 'static/images/img_based_vetted.svg',
      alt: ''
    }
  },
  {
    heading: `Talent manager to help manage your freelance team. Free.`,
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
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
            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.`
          )}
        </p>
        <Button>Gain Access a Freelancer</Button>
      </>
    ),
    image: {
      src: 'static/images/img_long_term--fix.svg',
      alt: ''
    }
  }
];

const HomepageImageBlocks = () => (
  <PageSection element="div" color="pale" className="Homepage__imageTextBlocks">
    {BLOCKS.map((blockProps, i) => (
      <div className="Homepage__imageTextBlockWrapper">
        <ImageTextBlock
          key={i}
          className="Homepage__imageTextBlock"
          {...blockProps}
        />
      </div>
    ))}
  </PageSection>
);

export default HomepageImageBlocks;
