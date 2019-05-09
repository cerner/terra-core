import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Grid from 'terra-grid/lib/Grid';
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
