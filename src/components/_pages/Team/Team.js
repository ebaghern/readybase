import React from 'react';
import cx from 'classnames';
import Layout from 'components/Layout';
import TeamCard from 'components/TeamCard';
import PageSection from 'components/PageSection';
import Header from './sections/TeamHeader';
import teamMembers from 'data/team';

const HEADER_THEME = 'light';
const HEADING = `The ReadyBase Team`;
const CONTENT = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;

const Team = () => (
  <Layout className="Team" title="Readybase" headerTheme={HEADER_THEME}>
    <Header theme={HEADER_THEME} heading={HEADING} content={CONTENT} />
    <PageSection className="Team__teamCards">
      {teamMembers &&
        teamMembers.map(({ id, location, ...teamProps }) => (
          <TeamCard className="Team__teamCard" key={id} {...teamProps} />
        ))}
    </PageSection>
  </Layout>
);

export default Team;
