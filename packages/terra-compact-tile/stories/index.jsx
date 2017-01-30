import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import CompactTile from '../src/CompactTile';
import Comment from '../src/Comment';
import Display from '../src/Display';

import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';
import { withKnobs, boolean, select } from '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';

const testElement = <img alt="Graphic" />;

const display1 = <Display text="display 1" />;
const display2 = <Display text="display 2" />;
const display3 = <Display text="display 3" />;
const display4 = <Display text="display 4" />;
const display5 = <Display text="display 5" />;
const display6 = <Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

const longDisplay1 = <Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const longDisplay2 = <Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const longDisplays = [longDisplay1, longDisplay2];

const styleDisplay1 = <Display text="display 1" style="secondary" />;
const styleDisplay2 = <Display text="display 2" style="strikeThrough" />;
const styleDisplay3 = <Display text="display 3" style="attention" />;
const styleDisplays = [styleDisplay1, styleDisplay2, styleDisplay3];

const params = {
  layout: 'oneColumn',
  theme: 'defaultTheme',
  displays: displays,
  leftAccessory: testElement,
  accessoryAlignment: 'alignCenter',
};

const paramsDouble = {
  layout: 'twoColumns',
  theme: 'defaultTheme',
  displays: displays,
  leftAccessory: testElement,
  rightAccessory: testElement,
  accessoryAlignment: 'alignCenter',
};

storiesOf('TerraCompactTile ', module)
  .add('Without props', () => (
    <CompactTile displays={displays} />
  ))
  .add('With two columns', () => (
    <CompactTile layout="twoColumns" displays={displays} />
  ))
  .add('With two columns left', () => (
    <CompactTile theme="leftEmphasisTheme" layout="twoColumns" displays={displays} />
  ))
  .add('With 1 column and 1 graphic', () => (
    <CompactTile {...params} />
  ))
  .add('With 2 columns and 2 graphics', () => (
    <CompactTile {...paramsDouble} />
  ))
  .add('With two rows', () => (
    <CompactTile layout="twoColumns" displays={[display1, display2, display3, display4]} />
  ))
  .add('With long text', () => (
    <CompactTile layout="twoColumns" displays={longDisplays} />
  ))
  .add('With long text with truncation', () => (
    <CompactTile layout="twoColumns" isTruncated={true} displays={longDisplays} />
  ))
  .add('With styles', () => (
    <CompactTile displays={styleDisplays} />
  ))