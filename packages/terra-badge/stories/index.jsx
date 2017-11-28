/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Badge from '../src/Badge';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ReadMe from '!raw-loader!../docs/README.md';

const Icon = (<svg className="terra-Icon" height="12px" width="12px" viewBox="0 0 48 48">
  <path d="M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z" fill="#FFF" />
</svg>);

storiesOf('Badge', module)
.addDecorator((story, context) => withInfo(ReadMe)(story)(context))
.add('Default', () => (
  <Badge text="Default" id="default-badge" />
))
.add('Icon', () => (
  <div>
    <Badge icon={Icon} text="icon" id="text-right" />
    {' '}
    <Badge icon={Icon} text="icon" isReversed id="text-left" />
    {' '}
    <Badge icon={Icon} id="no-text" />
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
