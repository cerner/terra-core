import React from 'react';
import Grid from 'terra-grid';

const GridNested = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column col={4}>
        <div className="demo-bar">4 Columns</div>
      </Grid.Column>
      <Grid.Column col={8}>
        <div className="demo-bar">8 Columns</div>
        <Grid.Row>
          <Grid.Column col={5}>
            <div className="demo-bar">5 Nested Columns</div>
          </Grid.Column>
          <Grid.Column col={7}>
            <div className="demo-bar">7 Nested Columns</div>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridNested;
