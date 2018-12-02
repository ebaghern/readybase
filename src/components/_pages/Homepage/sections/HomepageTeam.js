import React from 'react';
import TeamCard from 'components/TeamCard';
import PageSection from 'components/PageSection';

const HomepageTeam = ({ teamMembers }) => (
  <PageSection className="Homepage__team">
    <h2 className="screen-reader-text">Readybase team</h2>
    {teamMembers &&
      teamMembers.map(({ id, bio, ...teamProps }) => (
        <TeamCard key={id} {...teamProps} />
      ))}
  </PageSection>
);

export default HomepageTeam;
