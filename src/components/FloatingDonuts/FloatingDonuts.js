import React from 'react';
import Donut from 'static/images/donut-dark.svg';
import { range } from 'lodash';

const FloatingDonuts = () => (
  <div className="FloatingDonuts" aria-hidden>
    {range(5).map((donut, i) => (
      <Donut key={i} className="FloatingDonuts__item" />
    ))}
  </div>
);

export default FloatingDonuts;
