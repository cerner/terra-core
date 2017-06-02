/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-popup-presenter/docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import PopupPresenterSrc from '!raw-loader!terra-popup-presenter/src/PopupPresenter.jsx';
// Example Files
import PopupPresenterStandard from './PopupPresenterStandard';

const PopupPresenterExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PopupPresenterSrc} />
    <h2 id="standard-popup">Standard PopupPresenter</h2>
    <PopupPresenterStandard />
  </div>
);

export default PopupPresenterExamples;
