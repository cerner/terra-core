import React from 'react';
import Grid from '../../../../lib/Grid';
import './GridExample.module.scss';

const GridTiny = () => (
  <Grid id="grid">
    <Grid.Row>
      <Grid.Column id="column-1" tiny={1}>
        <div className="terra-grid-example">1 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-2" tiny={2}>
        <div className="terra-grid-example">2 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-3" tiny={3}>
        <div className="terra-grid-example">3 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-4" tiny={4}>
        <div className="terra-grid-example">4 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-5" tiny={5}>
        <div className="terra-grid-example">5 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-6" tiny={6}>
        <div className="terra-grid-example">6 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-7" tiny={7}>
        <div className="terra-grid-example">7 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-8" tiny={8}>
        <div className="terra-grid-example">8 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-9" tiny={9}>
        <div className="terra-grid-example">9 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-10" tiny={10}>
        <div className="terra-grid-example">10 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-11" tiny={11}>
        <div className="terra-grid-example">11 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-12" tiny={12}>
        <div className="terra-grid-example">12 Column Span</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridTiny;
