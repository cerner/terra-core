import React from 'react';
import Grid from '../../../../lib/Grid';
import './GridExample.module.scss';

const GridColumnUndefined = () => (
  <Grid id="grid">
    <Grid.Row id="row">
      <Grid.Column id="column-1">
        <div className="terra-grid-example">Column content</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridColumnUndefined;
