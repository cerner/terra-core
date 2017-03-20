/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ImageSrc from '!raw-loader!../src/Image.jsx';
/* Example Files*/
import ImageVariant from './ImageVariant';
import ImageFluid from './ImageFluid';
import ImageNonFluid from './ImageNonFluid';

const ImageExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ImageSrc} />
    <ImageVariant />
    <ImageFluid />
    <ImageNonFluid />
  </div>
);

export default ImageExamples;
