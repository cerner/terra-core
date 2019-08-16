import React from 'react';
import DynamicGrid from 'terra-dynamic-grid';
import Card from './Card';

const template = {
  'grid-template-columns': '1fr 1fr 1fr 1fr 1fr',
  'grid-template-rows': '100px',
  'grid-gap': '10px',
};

const region1 = {
  defaultPosition: {
    'grid-column-start': 1,
    'grid-row-start': 1,
  },
  small: {
    'grid-column-start': 2,
  },
  medium: {
    'grid-column-start': 3,
  },
  large: {
    'grid-column-start': 4,
  },
};

const region2 = {
  defaultPosition: {
    'grid-column-start': 2,
    'grid-row-start': 1,
  },
  small: {
    'grid-column-start': 3,
  },
  medium: {
    'grid-column-start': 4,
  },
  large: {
    'grid-column-start': 5,
  },
};


const region3 = {
  defaultPosition: {
    'grid-column-start': 3,
    'grid-row-start': 1,
  },
  small: {
    'grid-column-start': 4,
  },
  medium: {
    'grid-column-start': 5,
  },
  large: {
    'grid-column-start': 1,
  },
};

const region4 = {
  defaultPosition: {
    'grid-column-start': 4,
    'grid-row-start': 1,
  },
  small: {
    'grid-column-start': 5,
  },
  medium: {
    'grid-column-start': 1,
  },
  large: {
    'grid-column-start': 2,
  },
};

const region5 = {
  defaultPosition: {
    'grid-column-start': 5,
    'grid-row-start': 1,
  },
  small: {
    'grid-column-start': 1,
  },
  medium: {
    'grid-column-start': 2,
  },
  large: {
    'grid-column-start': 3,
  },
};


const ResponsiveGrid = () => (
  <DynamicGrid defaultTemplate={template}>
    <DynamicGrid.Region {...region1}>
      <Card>1</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region {...region2}>
      <Card>2</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region {...region3}>
      <Card>3</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region {...region4}>
      <Card>4</Card>
    </DynamicGrid.Region>
    <DynamicGrid.Region {...region5}>
      <Card>5</Card>
    </DynamicGrid.Region>
  </DynamicGrid>
);

export default ResponsiveGrid;
