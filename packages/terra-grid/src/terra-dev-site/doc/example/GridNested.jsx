import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Grid from 'terra-grid/lib/Grid';
import './GridExample.scss';

const GridNested = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column col={4}>
        <div className="terra-grid-example">4 Columns</div>
      </Grid.Column>
      <Grid.Column col={8}>
        <div className="terra-grid-example">8 Columns</div>
        <Grid.Row>
          <Grid.Column col={5}>
            <div className="terra-grid-example">5 Nested Columns</div>
          </Grid.Column>
          <Grid.Column col={7}>
            <div className="terra-grid-example">7 Nested Columns</div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridNested;
