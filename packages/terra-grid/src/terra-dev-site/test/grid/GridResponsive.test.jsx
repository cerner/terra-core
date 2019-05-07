import React from 'react';
import Grid from '../../../../lib/Grid';

const GridResponsive = () => (
  <Grid id="grid">
    <Grid.Row id="row">
      <Grid.Column id="column-1" tiny={12} small={4} medium={8} large={6}>
        <div>First Column content</div>
      </Grid.Column>
      <Grid.Column id="column-2" tiny={12} small={8} medium={4} large={6}>
        <div>Second Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridResponsive;
