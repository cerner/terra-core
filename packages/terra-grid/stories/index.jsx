/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import { checkA11y } from 'storybook-addon-a11y';
import 'storybook-addon-i18n-tools';

import Grid from '../src/Grid';
import './index.scss';

const Row = Grid.Row;
const Col = Grid.Column;

setOptions({
  name: 'Grid',
  url: 'https://github.com/cerner/terra-grid',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

addDecorator(checkA11y);

storiesOf('Grid ', module)
  .add('Responsive Grid Columns', () => (
    <Grid>
      <Row>
        <Col tiny={12} small={3} medium={2} large={1} ><div className={'demo-bar'} /></Col>
        <Col tiny={6} small={6} medium={8} large={10} ><div className={'demo-bar'} /></Col>
        <Col tiny={6} small={3} medium={2} large={1} ><div className={'demo-bar'} /></Col>
      </Row>
      <Row>
        <Col tiny={12} small={3} medium={2} large={2} huge={1} ><div className={'demo-bar'} /></Col>
        <Col tiny={8} small={6} medium={8} large={9} huge={10} ><div className={'demo-bar'} /></Col>
        <Col tiny={4} small={3} medium={2} large={1} huge={1} ><div className={'demo-bar'} /></Col>
      </Row>
      <Row>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
      </Row>
      <Row>
        <Col medium={3}><div className={'demo-bar'}>3</div></Col>
        <Col medium={3}><div className={'demo-bar'}>3</div></Col>
        <Col medium={3}><div className={'demo-bar'}>3</div></Col>
        <Col medium={3}><div className={'demo-bar'}>3</div></Col>
      </Row>
      <Row>
        <Col medium={4}><div className={'demo-bar'}>4</div></Col>
        <Col medium={4}><div className={'demo-bar'}>4</div></Col>
        <Col medium={4}><div className={'demo-bar'}>4</div></Col>
      </Row>
      <Row>
        <Col medium={6}><div className={'demo-bar'}>6</div></Col>
        <Col medium={6}><div className={'demo-bar'}>6</div></Col>
      </Row>
      <Row>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
        <Col medium={11}><div className={'demo-bar'}>11</div></Col>
      </Row>
      <Row>
        <Col medium={2}><div className={'demo-bar'}>2</div></Col>
        <Col medium={10}><div className={'demo-bar'}>10</div></Col>
      </Row>
      <Row>
        <Col medium={3}><div className={'demo-bar'}>3</div></Col>
        <Col medium={9}><div className={'demo-bar'}>9</div></Col>
      </Row>
      <Row>
        <Col medium={4}><div className={'demo-bar'}>4</div></Col>
        <Col medium={8}><div className={'demo-bar'}>8</div></Col>
      </Row>
      <Row>
        <Col medium={5}><div className={'demo-bar'}>5</div></Col>
        <Col medium={7}><div className={'demo-bar'}>7</div></Col>
      </Row>
      <Row>
        <Col medium={6}><div className={'demo-bar'}>6</div></Col>
        <Col medium={6}><div className={'demo-bar'}>6</div></Col>
      </Row>
      <Row>
        <Col medium={7}><div className={'demo-bar'}>7</div></Col>
        <Col medium={5}><div className={'demo-bar'}>5</div></Col>
      </Row>
      <Row>
        <Col medium={8}><div className={'demo-bar'}>8</div></Col>
        <Col medium={4}><div className={'demo-bar'}>4</div></Col>
      </Row>
      <Row>
        <Col medium={9}><div className={'demo-bar'}>9</div></Col>
        <Col medium={3}><div className={'demo-bar'}>3</div></Col>
      </Row>
      <Row>
        <Col medium={10}><div className={'demo-bar'}>10</div></Col>
        <Col medium={2}><div className={'demo-bar'}>2</div></Col>
      </Row>
      <Row>
        <Col medium={11}><div className={'demo-bar'}>11</div></Col>
        <Col medium={1}><div className={'demo-bar'}>1</div></Col>
      </Row>
      <Row>
        <Col medium={12}><div className={'demo-bar'}>12</div></Col>
      </Row>
    </Grid>
  ))
  .add('Nested Grid Structure', () => (
    <Grid>
      <Row>
        <Col col={4}><div className={'demo-bar'}>4</div></Col>
        <Col col={8}>
          <div className={'demo-bar'}>8</div>
          <Row>
            <Col col={5}><div className={'demo-bar'}>5</div></Col>
            <Col col={7}><div className={'demo-bar'}>7</div></Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  ));
