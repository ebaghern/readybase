import React from 'react';
import PageSection from 'components/PageSection';
import XYTable from 'components/XYTable';

const COMPARE_TABLE = {
  cols: [
    {
      key: 'ReadyBase',
      rows: [
        {
          key: 'Reliable',
          value: 'Yes'
        },
        {
          key: 'Costs',
          value: 'Moderate'
        },
        {
          key: 'Failure Rate',
          value: 'Low'
        },
        {
          key: 'Pre-vettered Freelancer',
          value: 'Yes'
        },
        {
          key: 'Support Included',
          value: 'Yes'
        },
        {
          key: 'High Engagement',
          value: 'Yes'
        }
      ]
    },
    {
      key: 'Virtual Platform',
      rows: [
        {
          key: 'Reliable',
          value: 'No'
        },
        {
          key: 'Costs',
          value: 'Low'
        },
        {
          key: 'Failure Rate',
          value: 'Extremely High'
        },
        {
          key: 'Pre-vettered Freelancer',
          value: 'No'
        },
        {
          key: 'Support Included',
          value: 'No'
        },
        {
          key: 'High Engagement',
          value: 'No'
        }
      ]
    },
    {
      key: 'Staffing Agency',
      rows: [
        {
          key: 'Reliable',
          value: 'Yes'
        },
        {
          key: 'Costs',
          value: 'High'
        },
        {
          key: 'Failure Rate',
          value: 'Moderate'
        },
        {
          key: 'Pre-vettered Freelancer',
          value: 'Yes'
        },
        {
          key: 'Support Included',
          value: 'No'
        },
        {
          key: 'High Engagement',
          value: 'No'
        }
      ]
    },
    {
      key: 'Independent',
      rows: [
        {
          key: 'Reliable',
          value: 'No'
        },
        {
          key: 'Costs',
          value: 'Moderate'
        },
        {
          key: 'Failure Rate',
          value: 'High'
        },
        {
          key: 'Pre-vettered Freelancer',
          value: 'No'
        },
        {
          key: 'Support Included',
          value: 'No'
        },
        {
          key: 'High Engagement',
          value: 'No'
        }
      ]
    }
  ]
};

const ForCompaniesCompare = (props) => (
  <PageSection color="pale" className="ForCompanies__compare">
    <div className="ForCompanies__compareInner">
      <h2 className="ForCompanies__compareHeading">How We Compare</h2>
      <XYTable cols={COMPARE_TABLE.cols} />
    </div>
  </PageSection>
);

export default ForCompaniesCompare;
