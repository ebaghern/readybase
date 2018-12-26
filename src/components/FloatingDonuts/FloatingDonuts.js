import React from 'react';
import T from 'prop-types';
import cx from 'classnames';
import Donut from 'static/images/donut.svg';
import getRandomInt from 'lib/utils/getRandomInt';
import { range } from 'lodash';

const FloatingDonuts = ({ num }) => {
  return (
    <div className="FloatingDonuts" aria-hidden>
      {range(num).map((x, i) => {
        const size = getRandomInt(50, 160);
        const self = i + 1;
        return (
          <React.Fragment key={i}>
            <Donut
              className={cx(
                'FloatingDonuts__item',
                `FloatingDonuts__item--${self}`
              )}
            />
            <style jsx global>{`
              .FloatingDonuts__item--${self} {
                left: ${self * (100 / num) - 100 / num / 2}%;
                width: ${size}px;
                height: ${size}px;
                animation-delay: ${getRandomInt(1, self * 4)}s;
                animation-duration: ${getRandomInt(10, 20)}s;
              }
            `}</style>
          </React.Fragment>
        );
      })}
    </div>
  );
};

FloatingDonuts.propTypes = {
  num: T.number,
};

FloatingDonuts.defaultProps = {
  num: 5,
};

export default FloatingDonuts;
