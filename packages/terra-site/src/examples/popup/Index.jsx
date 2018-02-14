/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import Grid from 'terra-grid';
import ReadMe from 'terra-popup/docs/README.md';
import { version } from 'terra-popup/package.json';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import PopupSrc from '!raw-loader!terra-popup/src/Popup.jsx';
// Example Files
import PopupStandard from './PopupStandard';
import PopupBounded from './PopupBounded';
import PopupNoHeader from './PopupNoHeader';
import PopupWithArrow from './PopupWithArrow';
import PopupClassName from './PopupClassName';
import PopupDimensions from './PopupDimensions';
import PopupBottomCenter from './PopupBottomCenter';
import PopupBottomLeft from './PopupBottomLeft';
import PopupBottomRight from './PopupBottomRight';
import PopupMiddleCenter from './PopupMiddleCenter';
import PopupMiddleLeft from './PopupMiddleLeft';
import PopupMiddleRight from './PopupMiddleRight';
import PopupTopCenter from './PopupTopCenter';
import PopupTopLeft from './PopupTopLeft';
import PopupTopRight from './PopupTopRight';
import PopupInsideModal from './PopupInsideModal';

const PopupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PopupSrc} />
    <h2 id="standard-popup" style={{ paddingTop: '20px' }}>Popup Default Props</h2>
    <PopupStandard />
    <h2 id="arrow-popup" style={{ paddingTop: '20px' }}>Popup Display With Arrow</h2>
    <PopupWithArrow />
    <h2 id="alignment-popups" style={{ paddingTop: '20px' }}>Popup Attachments</h2>
    <Grid>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupBottomLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupBottomCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupBottomRight />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupMiddleLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupMiddleCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupMiddleRight />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupTopLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupTopCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupTopRight />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <h2 id="dimension-popup" style={{ paddingTop: '20px' }}>Popup Size Variants</h2>
    <PopupDimensions />
    <h2 id="bounded-popup" style={{ paddingTop: '20px' }}>Popup Bounded</h2>
    <PopupBounded />
    <h2 id="no-header-popup" style={{ paddingTop: '20px' }}>Popup Bounded With No Header</h2>
    <PopupNoHeader />
    <h2 id="class-name-popup" style={{ paddingTop: '20px' }}>Popup Adding Class Styles</h2>
    <PopupClassName />
    <h2 id="modal-popup" style={{ paddingTop: '20px' }}>Popup Inside Modal</h2>
    <PopupInsideModal />
  </div>
);

export default PopupExamples;
