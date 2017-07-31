import React from 'react';
import Grid from '../../../lib/Grid';
import './GridExample.scss';

const GridDefault = () => (
  <Grid id="grid">
    <Grid.Row>
      <Grid.Column col={6}>
        <div className="terra-Grid-example">First Column content</div>
      </Grid.Column>
      <Grid.Column col={6}>
        <div className="terra-Grid-example">Second Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridDefault;
