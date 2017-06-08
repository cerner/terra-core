/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import Grid from 'terra-grid';
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
import PopupPresenterBottomCenter from './PopupPresenterBottomCenter';
import PopupPresenterBottomLeft from './PopupPresenterBottomLeft';
import PopupPresenterBottomRight from './PopupPresenterBottomRight';
import PopupPresenterMiddleCenter from './PopupPresenterMiddleCenter';
import PopupPresenterMiddleLeft from './PopupPresenterMiddleLeft';
import PopupPresenterMiddleRight from './PopupPresenterMiddleRight';
import PopupPresenterTopCenter from './PopupPresenterTopCenter';
import PopupPresenterTopLeft from './PopupPresenterTopLeft';
import PopupPresenterTopRight from './PopupPresenterTopRight';

const PopupPresenterExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={PopupPresenterSrc} />
    <h2 id="standard-popup" style={{paddingTop: '20px'}}>PopupPresenter Default Props</h2>
    <PopupPresenterStandard />
    <h2 id="arrow-popup" style={{paddingTop: '20px'}}>PopupPresenter Display With Arrow</h2>
    <PopupPresenterArrow />
    <h2 id="alignment-popups" style={{paddingTop: '20px'}}>PopupPresenter Attachments</h2>
    <Grid>
      <Grid.Row>
        <Grid.Column col={2}>
          <PopupPresenterBottomCenter/>
        </Grid.Column>
        <Grid.Column col={2}>
          <PopupPresenterBottomLeft />
        </Grid.Column>
        <Grid.Column col={2}>
          <PopupPresenterBottomRight />
        </Grid.Column>
      </Grid.Row>  
      <Grid.Row>
        <Grid.Column col={2}>
          <PopupPresenterMiddleCenter />
        </Grid.Column>
        <Grid.Column col={2}>
          <PopupPresenterMiddleLeft />
        </Grid.Column>
        <Grid.Column col={2}>
          <PopupPresenterMiddleRight />
        </Grid.Column>
      </Grid.Row>  
      <Grid.Row>  
        <Grid.Column col={2}>
          <PopupPresenterTopCenter />
        </Grid.Column>
        <Grid.Column col={2}>
          <PopupPresenterTopLeft />
        </Grid.Column>
        <Grid.Column col={2}>
          <PopupPresenterTopRight />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <h2 id="bounded-popup" style={{paddingTop: '20px'}}>PopupPresenter Bounded</h2>
    <PopupPresenterBounded />
    <h2 id="no-header-popup" style={{paddingTop: '20px'}}>PopupPresenter Bounded With No Header</h2>
    <PopupPresenterNoHeader />
    <h2 id="class-name-popup" style={{paddingTop: '20px'}}>PopupPresenter Adding Class Styles</h2>
    <PopupPresenterClassName />
    <h2 id="size-popups" style={{paddingTop: '20px'}}>PopupPresenter Dimensions</h2>
    <Grid>
      <Grid.Row>
        <Grid.Column col={1}>
          <PopupPresenterTiny/>
        </Grid.Column>
        <Grid.Column col={1}>
          <PopupPresenterSmall />
        </Grid.Column>
        <Grid.Column col={1}>
          <PopupPresenterMedium />
        </Grid.Column>
        <Grid.Column col={1}>
          <PopupPresenterLarge />
        </Grid.Column>
        <Grid.Column col={1}>
          <PopupPresenterHuge />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default PopupPresenterExamples;
