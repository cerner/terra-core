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
import TagHref from './HrefTag';
import TagFallbacks from './TagFallbacks';

const TagExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TagSrc} />
    <h2 id="default">Default Tag with onClick</h2>
    <TagDefault />
    <br />
    <h2 id="href">Tag with href</h2>
    <TagHref />
    <br />
    <br />
    <TagFallbacks />
  </div>
);

export default TagExamples;
