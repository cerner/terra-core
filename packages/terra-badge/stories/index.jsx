/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Badge from '../src/Badge';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ReadMe from '!raw-loader!../docs/README.md';
import { mockIcon } from '../../../.storybook/mock-data';

storiesOf('Badge', module)
.addDecorator((story, context) => withInfo(ReadMe)(story)(context))
.add('Default', () => (
  <Badge text="Default" id="default-badge" />
))
.add('Icon', () => (
  <div>
    <Badge icon={mockIcon} text="icon" id="text-right" />
    {' '}
    <Badge icon={mockIcon} text="icon" isReversed id="text-left" />
    {' '}
    <Badge icon={mockIcon} id="no-text" />
  </div>
))
.add('Intent', () => (
  <div>
    <Badge text="Default" id="default-badge" />
    {' '}
    <Badge intent="primary" text="Primary" id="primary-badge" />
    {' '}
    <Badge intent="secondary" text="Secondary" id="secondary-badge" />
    {' '}
    <Badge intent="positive" text="Positive" id="positive-badge" />
    {' '}
    <Badge intent="negative" text="Negative" id="negative-badge" />
    {' '}
    <Badge intent="warning" text="Warning" id="warning-badge" />
    {' '}
    <Badge intent="info" text="Info" id="info-badge" />
  </div>
))
.add('Size', () => (
  <div>
    <Badge size="tiny" text="Tiny" id="tiny-badge" />
    {' '}
    <Badge size="small" text="Small" id="small-badge" />
    {' '}
    <Badge size="medium" text="Medium" id="medium-badge" />
    {' '}
    <Badge size="large" text="Large" id="large-badge" />
    {' '}
    <Badge size="huge" text="Huge" id="huge-badge" />
  </div>
));

storiesOf('Badge/Additional Test Cases', module)
.add('Long Text', () => (
  <div>
    <Badge text="A badge with a long string of text within it" />
    {' '}
    <Badge icon={mockIcon} text="A badge with a long string of text within it" />
    {' '}
    <Badge icon={mockIcon} isReversed text="A badge with a long string of text within it" />
  </div>
));
