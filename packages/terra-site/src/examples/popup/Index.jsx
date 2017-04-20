/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-popup/docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import PopupSrc from '!raw-loader!terra-popup/src/Popup.jsx';
// Example Files
import PopupStandard from './PopupStandard';

const PopupExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PopupSrc} />
    <h2 id="standard">Standard Popup</h2>
    <PopupStandard />
  </div>
);

export default PopupExamples;
