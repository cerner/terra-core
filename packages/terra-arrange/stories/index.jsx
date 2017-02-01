/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Arrange from '../src/Arrange';

storiesOf('Arrange ', module)
  .add('Without props', () => (
    <Arrange />
  ));
