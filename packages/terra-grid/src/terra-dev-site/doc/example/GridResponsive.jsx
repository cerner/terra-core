import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Grid from 'terra-grid/lib/Grid';
import './GridExample.module.scss';

const GridResponsive = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column tiny={12} small={4} medium={8} large={6}>
        <div className="terra-grid-example">First Column content</div>
      </Grid.Column>
      <Grid.Column tiny={12} small={8} medium={4} large={6}>
        <div className="terra-grid-example">Second Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridResponsive;
