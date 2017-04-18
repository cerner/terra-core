import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-image/docs/README.md';
import { version } from 'terra-image/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ImageSrc from '!raw-loader!terra-image/src/Image';

// Example Files
import ImageDefault from './ImageDefault';

const ImageExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ImageSrc} />
    <ImageDefault />
  </div>
);

export default ImageExamples;
