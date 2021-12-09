import React from 'react';
import Grid from 'terra-grid';
import './GridExample.module.scss';

const GridDefault = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column tiny={6}>
        <div className="terra-grid-example">First Column content</div>
      </Grid.Column>
      <Grid.Column tiny={6}>
        <div className="terra-grid-example">Second Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridDefault;
