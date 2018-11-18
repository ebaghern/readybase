import React from 'react';
import colShape from 'lib/propTypes/shape-xyTable';
import weakKey from 'lib/utils/weakKey';
import TableLabel from './XYTableLabel';

const XYTableHeader = ({ cols }) => (
  <thead className="XYTable__header">
    <tr className="XYTable__headerRow">
      <td className="XYTable__headerSpacer" />
      {cols.map((col) => (
        <th key={weakKey(col)} scope="col" className="XYTable__headerCell">
          <TableLabel>{col.key}</TableLabel>
        </th>
      ))}
    </tr>
  </thead>
);

XYTableHeader.propTypes = {
  cols: colShape
};

export default XYTableHeader;
