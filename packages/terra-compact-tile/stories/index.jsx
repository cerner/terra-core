import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import CompactTile from '../src/CompactTile';
import Comment from '../src/Comment';
import Display from '../src/Display';

import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';
import { withKnobs, boolean, select } from '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';

const display1 = <Display text="display 1" />;
const display2 = <Display text="display 2" />;
const display3 = <Display text="display 3" />;
const displays = [display1, display2, display3];

storiesOf('TerraCompactTile ', module)
  .add('Without props', () => (
    <CompactTile theme="leftEmphasisTheme" displays={displays} />
  ))
