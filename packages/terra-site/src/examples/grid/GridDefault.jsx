import React from 'react';
import Grid from 'terra-grid';

const GridDefault = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column col={6}>
        <div className="demo-bar">First Column content</div>
      </Grid.Column>
      <Grid.Column col={6}>
        <div className="demo-bar">Second Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridDefault;
