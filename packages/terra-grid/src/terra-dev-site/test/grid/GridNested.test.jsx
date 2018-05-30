import React from 'react';
import Grid from '../../../../lib/Grid';
import './GridExample.scss';

const GridNested = () => (
  <Grid id="grid">
    <Grid.Row id="row">
      <Grid.Column id="column-1" col={4}>
        <div className="terra-Grid-example">4 Columns</div>
      </Grid.Column>
      <Grid.Column id="column-2" col={8}>
        <div className="terra-Grid-example">8 Columns</div>
        <Grid.Row id="nested-row">
          <Grid.Column id="nested-column-1" col={5}>
            <div id="nested-column-1-text" className="terra-Grid-example">5 Nested Columns</div>
          </Grid.Column>
          <Grid.Column id="nested-column-2" col={7}>
            <div id="nested-column-2-text" className="terra-Grid-example">7 Nested Columns</div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridNested;
