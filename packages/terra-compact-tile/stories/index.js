import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TerraCompactTile from '../src/TerraCompactTile';

storiesOf('TerraCompactTile ', module)
  .add('Without props', () => (
    <TerraCompactTile />
  ))
