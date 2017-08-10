import React from 'react';
import DynamicGrid from 'terra-dynamic-grid/src/DynamicGrid';
import Region from 'terra-dynamic-grid/src/Region';

import Card from './Card';

const layouts = [{
  'grid-template-columns': '100px 100px 100px',
  'grid-template-rows': '100px 100px 100px',
  'grid-gap': '10px',
  regions: [
    {
      name: 'r11',
      'grid-column-start': 1,
      'grid-row-start': 1,
    },
    {
      name: 'r12',
      'grid-column-start': 2,
      'grid-row-start': 1,
    },
    {
      name: 'r13',
      'grid-column-start': 3,
      'grid-row-start': 1,
    },
    {
      name: 'r21',
      'grid-column-start': 1,
      'grid-row-start': 2,
    },
    {
      name: 'r22',
      'grid-column-start': 2,
      'grid-row-start': 2,
    },
    {
      name: 'r23',
      'grid-column-start': 3,
      'grid-row-start': 2,
    },
    {
      name: 'r31',
      'grid-column-start': 1,
      'grid-row-start': 3,
    },
    {
      name: 'r32',
      'grid-column-start': 2,
      'grid-row-start': 3,
    },
    {
      name: 'r33',
      'grid-column-start': 3,
      'grid-row-start': 3,
    },
    {
      name: 'cell',
      'grid-column-start': 1,
      'grid-row-start': 1,
    },
  ],
}, {
  media: '@media (max-width: 1500px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 2,
      'grid-row-start': 1,
    },
  ],
}, {
  media: '@media (max-width: 1400px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 3,
      'grid-row-start': 1,
    },
  ],
}, {
  media: '@media (max-width: 1300px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 1,
      'grid-row-start': 2,
    },
  ],
}, {
  media: '@media (max-width: 1200px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 2,
      'grid-row-start': 2,
    },
  ],
}, {
  media: '@media (max-width: 1100px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 3,
      'grid-row-start': 2,
    },
  ],
}, {
  media: '@media (max-width: 1000px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 1,
      'grid-row-start': 3,
    },
  ],
}, {
  media: '@media (max-width: 900px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 2,
      'grid-row-start': 3,
    },
  ],
}, {
  media: '@media (max-width: 800px)',
  regions: [
    {
      name: 'cell',
      'grid-column-start': 3,
      'grid-row-start': 3,
    },
  ],
}];


const ResponsiveGrid = () => (
  (<DynamicGrid layouts={layouts}>
    <Region name="r11">
      <Card />
    </Region>
    <Region name="r12">
      <Card />
    </Region>
    <Region name="r13">
      <Card />
    </Region>
    <Region name="r21">
      <Card />
    </Region>
    <Region name="r22">
      <Card />
    </Region>
    <Region name="r23">
      <Card />
    </Region>
    <Region name="r31">
      <Card />
    </Region>
    <Region name="r32">
      <Card />
    </Region>
    <Region name="r33">
      <Card />
    </Region>
    <Region name="cell">
      <Card>Hello</Card>
    </Region>
  </DynamicGrid>)
);

export default ResponsiveGrid;
