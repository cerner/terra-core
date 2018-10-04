# Terra Grid

The grid component provides a flexbox based grid system.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-grid`
  - `yarn add terra-grid`

## Usage

```jsx
import React from 'react';
import Grid from 'terra-grid';

<Grid>
  <Grid.Row>
    <Grid.Column tiny={6} small={5} medium={4} large={3} huge={2}>
      <p> First Column content </p>
    </Grid.Column>
    <Grid.Column col={3}>
      <p> Second Column content </p>
    </Grid.Column>
  </Grid.Row>
</Grid>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
