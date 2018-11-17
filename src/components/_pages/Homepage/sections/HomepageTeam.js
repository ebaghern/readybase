import React from 'react';
import TeamCard from 'components/TeamCard';

const HomepageTeam = ({ teamMembers }) => (
  <section className="Homepage__team">
    <h2 className="screen-reader-text">Readybase team</h2>
    {teamMembers &&
      teamMembers.map(({ id, bio, ...teamProps }) => (
        <TeamCard key={id} {...teamProps} />
      ))}
  </section>
);

export default HomepageTeam;
