import React from 'react';
import Grid from '../../../../lib/Grid';
import './GridExample.module.scss';

const GridHuge = () => (
  <Grid id="grid">
    <Grid.Row>
      <Grid.Column id="column-1" huge={1}>
        <div className="terra-grid-example">1 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-2" huge={2}>
        <div className="terra-grid-example">2 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-3" huge={3}>
        <div className="terra-grid-example">3 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-4" huge={4}>
        <div className="terra-grid-example">4 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-5" huge={5}>
        <div className="terra-grid-example">5 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-6" huge={6}>
        <div className="terra-grid-example">6 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-7" huge={7}>
        <div className="terra-grid-example">7 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-8" huge={8}>
        <div className="terra-grid-example">8 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-9" huge={9}>
        <div className="terra-grid-example">9 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-10" huge={10}>
        <div className="terra-grid-example">10 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-11" huge={11}>
        <div className="terra-grid-example">11 Column Span</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column id="column-12" huge={12}>
        <div className="terra-grid-example">12 Column Span</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default GridHuge;
