import React from 'react';
import Grid from '../../../../lib/Grid';
import './GridExample.module.scss';

const GridNested = () => (
  <Grid id="grid">
    <Grid.Row id="row">
      <Grid.Column id="column-1" tiny={4}>
        <div>4 Columns</div>
      </Grid.Column>
      <Grid.Column id="column-2" tiny={8}>
        <div>8 Columns</div>
        <Grid.Row id="nested-row">
          <Grid.Column id="nested-column-1" tiny={5}>
            <div id="nested-column-1-text">5 Nested Columns</div>
          </Grid.Column>
          <Grid.Column id="nested-column-2" tiny={7}>
            <div id="nested-column-2-text">7 Nested Columns</div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridNested;
