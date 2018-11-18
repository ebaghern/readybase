import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import colShape from 'lib/propTypes/shape-xyTable';
import find from 'array.prototype.find';
import weakKey from 'lib/utils/weakKey';

const XYTableBody = ({ cols, rows }) => (
  <tbody className="XYTable__body">
    {rows.map((row) => {
      return (
        <tr key={weakKey({ row })} className="XYTable__bodyRow">
          <th scope="row" className="XYTable__bodyCell XYTable__bodyCell--key">
            {row}
          </th>
          {cols.map((col, i) => {
            const currentCell = find(col.rows, (r) => r.key === row);
            return (
              <td
                key={currentCell ? weakKey(currentCell) : i}
                className={cx('XYTable__bodyCell', {
                  'XYTable__bodyCell--featured': col.key === 'ReadyBase'
                })}
              >
                {currentCell ? currentCell.value : ''}
              </td>
            );
          })}
        </tr>
      );
    })}
  </tbody>
);

XYTableBody.propTypes = {
  cols: colShape,
  rows: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default XYTableBody;
