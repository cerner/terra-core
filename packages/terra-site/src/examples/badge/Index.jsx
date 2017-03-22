import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-badge/docs/README.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import BadgeSrc from '!raw-loader!terra-badge/src/Badge';

// Example Files
import BadgeIntent from './BadgeIntent';
import BadgeSize from './BadgeSize';
import BadgeIcon from './BadgeIcon';

const BadgeExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={BadgeSrc} />
    <h2 id="default">Intent</h2>
    <BadgeIntent />
    <h2 id="size">Size</h2>
    <BadgeSize />
    <h2 id="icon">Icon</h2>
    <BadgeIcon />
  </div>
);

export default BadgeExamples;
