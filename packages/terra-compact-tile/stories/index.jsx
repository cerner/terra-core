import React from 'react';
import { addDecorator, storiesOf } from '@kadira/storybook';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';
import { withKnobs, boolean, select } from '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';

import CompactTile from '../src/CompactTile';
import Comment from '../src/Comment';
import Display from '../src/Display';

setOptions({
  name: 'Terra CompactTile Storybook',
  url: 'https://github.com/cerner/terra-compact-tile',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

addDecorator(checkA11y);
addDecorator(withKnobs);


const layoutLabel = 'Column Layout';
const layoutOptions = {
  oneColumn: 'oneColumn',
  twoColumns: 'twoColumns',
};

const themeLabel = 'Theme';
const themeOptions = {
  defaultTheme: 'defaultTheme',
  leftEmphasisTheme: 'leftEmphasisTheme',
};

const alignmentLabel = 'Accessory Alignment';
const alignmentOptions = {
  alignTop: 'alignTop',
  alignCenter: 'alignCenter',
};

const testElement = <img alt="Graphic" />;

const display1 = <Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <Display text="display 3" />;
const display4 = <Display text="display 4" />;
const display5 = <Display text="display 5" />;
const display6 = <Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

const styleDisplay1 = <Display text="display 1" style="secondary" />;
const styleDisplay2 = <Display text="display 2" style="strikeThrough" />;
const styleDisplay3 = <Display text="display 3" style="attention" />;
const styleDisplays = [styleDisplay1, styleDisplay2, styleDisplay3];

const comment = <Comment  text="Here lies a comment, taken from us in it's prime." />

const params = {
  layout: 'oneColumn',
  theme: 'defaultTheme',
  displays: displays,
  leftAccessory: testElement,
  accessoryAlignment: 'alignCenter',
  comment,
};

const stories = storiesOf('Terra CompactTile', module);

stories
  .add('With Params', () => (
    <CompactTile
      layout={select(layoutLabel, layoutOptions, 'oneColumn') }
      theme={select(themeLabel, themeOptions, 'defaultTheme')}
      isTruncated={boolean('Is Truncated', false)}
      displays={displays}
      leftAccessory={testElement}
      rightAccessory={testElement}
      accessoryAlignment={select(alignmentLabel, alignmentOptions, 'alignCenter')}
      comment={comment}
    />
  ))
  .add('With two rows', () => (
    <CompactTile layout="twoColumns" displays={[display1, display2, display3, display4]} />
  ))
  .add('With styles', () => (
    <CompactTile displays={styleDisplays} />
  ));