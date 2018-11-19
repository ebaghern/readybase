import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { uniq } from 'lodash';
import ResizeDetector from 'react-resize-detector';
import TableHeader from './components/XYTableHeader';
import TableBody from './components/XYTableBody';
import TableLabel from './components/XYTableLabel';
import breakpoints from 'lib/data/breakpoints';
import colShape from 'lib/propTypes/shape-xyTable';
import weakKey from 'lib/utils/weakKey';

class XYTable extends Component {
  static propTypes = {
    cols: colShape
  };

  render() {
    const { cols } = this.props;
    return (
      <ResizeDetector
        handleWidth
        render={({ width }) => {
          // @todo: Unit test
          const rows = cols
            .map((col) => col.rows) // [ [ { key, values }, { key, values } ], ... ]
            .reduce((acc, row) => {
              const keys = row.map(({ key }) => key);
              return keys && keys.length ? uniq([...acc, ...keys]) : acc;
            }, []); // [ key, key, key ]

          return width > breakpoints.medium ? (
            <table className="XYTable">
              <TableHeader cols={cols} />
              <TableBody cols={cols} rows={rows} />
            </table>
          ) : (
            <ul className="XYTable__list">
              {cols.map((col) => (
                <li key={weakKey(col)} className="XYTable__listItem">
                  <dl className="XYTable__listInner">
                    <dt className="XYTable__listTitle">
                      <TableLabel>{col.key}</TableLabel>
                    </dt>
                    {col.rows.map((row) => (
                      <dd
                        className={cx('XYTable__listDescription', {
                          'XYTable__listDescription--featured':
                            col.key === 'ReadyBase'
                        })}
                        key={weakKey(row)}
                      >
                        <span className="XYTable__listLabel">{row.key}:</span>{' '}
                        <span className="XYTable__listValue">{row.value}</span>
                      </dd>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          );
        }}
      />
    );
  }
}

export default XYTable;
