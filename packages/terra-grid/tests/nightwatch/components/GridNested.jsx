import React from 'react';
import Grid from '../../../lib/Grid';
import './GridExample.scss';

const GridNested = () => (
  <Grid id="grid">
    <Grid.Row>
      <Grid.Column col={4}>
        <div className="terra-Grid-example">4 Columns</div>
      </Grid.Column>
      <Grid.Column col={8}>
        <div className="terra-Grid-example">8 Columns</div>
        <Grid.Row>
          <Grid.Column col={5}>
            <div className="terra-Grid-example">5 Nested Columns</div>
          </Grid.Column>
          <Grid.Column col={7}>
            <div className="terra-Grid-example">7 Nested Columns</div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridNested;
