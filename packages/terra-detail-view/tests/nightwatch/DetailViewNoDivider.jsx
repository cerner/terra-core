/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Grid from 'terra-grid';

import DetailView from '../../lib/DetailView';

const DetailViewNoDivider = () => (
  <DetailView
    title="Header"
    subtitles={['Subtitle 1', 'Subtitle 2']}
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

export default DetailViewNoDivider;
