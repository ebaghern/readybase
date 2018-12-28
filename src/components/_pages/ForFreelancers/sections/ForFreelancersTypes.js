import React from 'react';
import smart from 'lib/utils/smartContent';
import Button from 'components/Button';
import OList from 'components/OList';
import ListGrid from 'components/ListGrid';
import PageSection from 'components/PageSection';

const PERSONALITIES = [
  `High performers that carry themselves with the heart of a teacher.`,
  `Passion for high quality work that clients love.`,
  `Great comunication skills: able to call out issues diplomatically.`,
  `...and/or a strong desire to learn and grow in all three of the above.`
];

const LIST_GRID_ITEMS = [
  'Developers',
  'Designers',
  'Data Scientists',
  'Tech Consultants',
  'Project Managers',
  'Digital Marketers'
];

const ForFreelancersTypes = () => (
  <PageSection
    element="div"
    className="ForFreelancers__types"
    color="pale"
  >
    <div className="ForFreelancers__typesInner">
      <section className="ForFreelancers__typesSection">
        <h2 className="ForFreelancers__typesHeading">
          {smart(`Characteristics of a ReadyBase Freelancer`)}
        </h2>
        <OList className="ForFreelancers__typesList">
          {PERSONALITIES.map((item, i) => (
            <li className="ForFreelancers__typesListItem" key={i}>
              {smart(item)}
            </li>
          ))}
        </OList>
      </section>
      <section className="ForFreelancers__typesSection">
        <h2 className="ForFreelancers__typesHeading">
          {smart(`Freelancers We're Seeking`)}
        </h2>
        <ListGrid items={LIST_GRID_ITEMS} />
      </section>
      <div className="ForFreelancers__typesButton">
        <Button href="apply">
          Become a ReadyBase Freelancer
        </Button>
      </div>
    </div>
  </PageSection>
);

export default ForFreelancersTypes;
