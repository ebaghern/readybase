import React from 'react';
import Button from 'components/Button';
import ImageTextBlock from 'components/ImageTextBlock';
import TestimonialCredit from 'components/TestimonialCredit';
import ImageGoodCompany from 'static/images/img_good_company.svg';
import ImageVetted from 'static/images/img_based_vetted.svg';
import ImageTalentManager from 'static/images/img_talent_manager.svg';
import ImageLongTerm from 'static/images/img_long_term.svg';

const HomepageImageBlocks = () => (
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
);

export default HomepageImageBlocks;
