import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-tag/docs/README.md';
import { version } from 'terra-tag/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TagSrc from '!raw-loader!terra-tag/src/Tag';

// Example Files
import TagDefault from './TagDefault';
import TagIconAndText from './TagIconAndText';
import TagHref from './HrefTag';

const TagExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TagSrc} />
    <h2 id="default">Default Tag</h2>
    <TagDefault />
    <h2 id="icon-and-text">Icon and Text Tag</h2>
    <TagIconAndText />
    <h2 id="href">Href Tag</h2>
    <TagHref />
  </div>
);

export default TagExamples;
