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
import PopupPresenterBounded from './PopupPresenterBounded';
import PopupPresenterNoHeader from './PopupPresenterNoHeader';
import PopupPresenterArrow from './PopupPresenterArrow';
import PopupPresenterClassName from './PopupPresenterClassName';
import PopupPresenterTiny from './PopupPresenterTiny';
import PopupPresenterSmall from './PopupPresenterSmall';
import PopupPresenterMedium from './PopupPresenterMedium';
import PopupPresenterLarge from './PopupPresenterLarge';
import PopupPresenterHuge from './PopupPresenterHuge';


const PopupPresenterExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PopupPresenterSrc} />
    <h2 id="standard-popup" style={{paddingTop: '20px'}}>Standard PopupPresenter</h2>
    <PopupPresenterStandard />
    <h2 id="arrow-popup" style={{paddingTop: '20px'}}>Arrow PopupPresenter</h2>
    <PopupPresenterArrow />
    <h2 id="bounded-popup" style={{paddingTop: '20px'}}>Bounded PopupPresenter</h2>
    <PopupPresenterBounded />
    <h2 id="no-header-popup" style={{paddingTop: '20px'}}>No Header PopupPresenter</h2>
    <PopupPresenterNoHeader />
    <h2 id="class-name-popup" style={{paddingTop: '20px'}}>Class Names PopupPresenter</h2>
    <PopupPresenterClassName />
    <h2 id="10x-popup" style={{paddingTop: '20px'}}>10x PopupPresenter</h2>
    <PopupPresenterTiny/>
    <h2 id="25x-popup" style={{paddingTop: '20px'}}>25x PopupPresenter</h2>
    <PopupPresenterSmall />
    <h2 id="50x-popup" style={{paddingTop: '20px'}}>50x PopupPresenter</h2>
    <PopupPresenterMedium />
    <h2 id="75x-popup" style={{paddingTop: '20px'}}>75x PopupPresenter</h2>
    <PopupPresenterLarge />
    <h2 id="100x-popup" style={{paddingTop: '20px'}}>100x PopupPresenter</h2>
    <PopupPresenterHuge />
  </div>
);

export default PopupPresenterExamples;
