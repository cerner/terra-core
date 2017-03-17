/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from 'terra-grid';
import DetailView from '../src/DetailView';

const DetailViewDivided = () => (
  <DetailView
    title={<h1 className="terra-Title terra-Title--large">Header</h1>}
    subtitles={[<DetailView.Subtitle text="Subtitle 1" key="Subtitle1" />, <DetailView.Subtitle text="Subtitle 2" key="Subtitle2" />]}
    graph={<div style={{ border: '1px solid black', height: '20em', width: '25em', marginBottom: '0.714rem' }}>This is where any visualizations would go</div>}
    details={[
      <Grid key="detailInfo">
        <Grid.Row>
          <Grid.Column col={6}>
            <div>First Row - First Column content</div>
          </Grid.Column>
          <Grid.Column col={6}>
            <div>First Row - Second Column content</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column col={6}>
            <div>Second Row - First Column content</div>
          </Grid.Column>
          <Grid.Column col={6}>
            <div>Second Row - Second Column content</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>,
    ]}
    footer="Footer Text"
    isDivided={false}
  />
);

export default DetailViewDivided;
