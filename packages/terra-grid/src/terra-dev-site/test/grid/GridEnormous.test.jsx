import React from 'react';
import Grid from '../../../../lib/Grid';
import './GridExample.module.scss';

const GridEnormous = () => (
  <Grid id="grid">
    <Grid.Row id="row">
      <Grid.Column id="column-1" enormous={1}>
        <div className="terra-grid-example">1 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-2" enormous={2}>
        <div className="terra-grid-example">2 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-3" enormous={3}>
        <div className="terra-grid-example">3 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-4" enormous={4}>
        <div className="terra-grid-example">4 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-5" enormous={5}>
        <div className="terra-grid-example">5 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-6" enormous={6}>
        <div className="terra-grid-example">6 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-7" enormous={7}>
        <div className="terra-grid-example">7 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-8" enormous={8}>
        <div className="terra-grid-example">8 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-9" enormous={9}>
        <div className="terra-grid-example">9 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-10" enormous={10}>
        <div className="terra-grid-example">10 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-11" enormous={11}>
        <div className="terra-grid-example">11 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row id="row">
      <Grid.Column id="column-12" enormous={12}>
        <div className="terra-grid-example">12 Column Span</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridEnormous;
