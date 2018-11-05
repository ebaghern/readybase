import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hamburger from './Hamburger';

storiesOf('Hamburger', module).add('burger', () => (
  <Hamburger handleToggle={action('clicked')} isActive={false} />
));
