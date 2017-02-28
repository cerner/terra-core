/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import ProgressBar from '../src/ProgressBar';

setOptions({
  name: 'ProgressBar',
  url: 'https://github.com/cerner/terra-progress-bar',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

addDecorator(checkA11y);

storiesOf('TerraProgressBar ', module)
  .add('Without props', () => (
    <ProgressBar />
  ));

storiesOf('Size', module)
  .add('Tiny - 15%', () => (
    <ProgressBar height="tiny" value={15} />
  ))
  .add('Small (Default) - 30%', () => (
    <ProgressBar height="small" value={30} />
  ))
  .add('Medium - 45%', () => (
    <ProgressBar height="medium" value={45} />
  ))
  .add('Large - 60%', () => (
    <ProgressBar height="large" value={60} />
  ))
  .add('Huge - 75%', () => (
    <ProgressBar height="huge" value={75} />
  ));

storiesOf('Color', module)
  .add('With color=Orange value=5 and max=10', () => (
    <ProgressBar value={5} max={10} color="Orange" />
  ))
  .add('With color=#8ccc62 (Green) value=7.5 and max=10', () => (
    <ProgressBar value={7.5} max={10} color="#8ccc62" />
  ))
  .add('With color=rgb(255, 0, 0) (Red) value=10 and max=10', () => (
    <ProgressBar value={10} max={10} color="rgb(255, 0, 0)" />
  ));


storiesOf('Custom Props', module)
  .add('Default height, 4 of 12 = 33.3% fill with title attribute', () => (
    <ProgressBar value={4} max={12} title="ProgressBarTest" />
  ));
