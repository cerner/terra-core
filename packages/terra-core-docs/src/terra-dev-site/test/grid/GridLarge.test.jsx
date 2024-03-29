import React from 'react';
import Grid from 'terra-grid';
import './GridExample.module.scss';

const GridLarge = () => (
  <Grid id="grid">
    <Grid.Row>
      <Grid.Column id="column-1" large={1}>
        <div className="terra-grid-example">1 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-2" large={2}>
        <div className="terra-grid-example">2 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-3" large={3}>
        <div className="terra-grid-example">3 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-4" large={4}>
        <div className="terra-grid-example">4 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-5" large={5}>
        <div className="terra-grid-example">5 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-6" large={6}>
        <div className="terra-grid-example">6 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-7" large={7}>
        <div className="terra-grid-example">7 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-8" large={8}>
        <div className="terra-grid-example">8 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-9" large={9}>
        <div className="terra-grid-example">9 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-10" large={10}>
        <div className="terra-grid-example">10 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-11" large={11}>
        <div className="terra-grid-example">11 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-12" large={12}>
        <div className="terra-grid-example">12 Column Span</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridLarge;
