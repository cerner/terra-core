import React from 'react';
import Grid from '../../../lib/Grid';

const GridResponsive = () => (
  <Grid id="grid">
    <Grid.Row>
      <Grid.Column tiny={12} small={8} medium={4} large={6}>
        <div className="terra-Grid-example">First Column content</div>
      </Grid.Column>
      <Grid.Column tiny={12} small={4} medium={8} large={6}>
        <div className="terra-Grid-example">Second Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridResponsive;
