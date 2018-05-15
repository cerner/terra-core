/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-dynamic-grid/docs/README.md';
import { name } from 'terra-dynamic-grid/package.json';

// Component Source
import DynamicGridSrc from '!raw-loader!terra-dynamic-grid/src/DynamicGrid';
import RegionSrc from '!raw-loader!terra-dynamic-grid/src/Region';

// Example Files
import OneColumn from './OneColumn';
import OneColumnSrc from '!raw-loader!./OneColumn';
import TwoColumn from './TwoColumn';
import TwoColumnSrc from '!raw-loader!./TwoColumn';
import ULayout from './ULayout';
import ULayoutSrc from '!raw-loader!./ULayout';
import Dashboard from './Dashboard';
import DashboardSrc from '!raw-loader!./Dashboard';
import ResponsiveGrid from './ResponsiveGrid';
import ResponsiveGridSrc from '!raw-loader!./ResponsiveGrid';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'One Column',
        example: <OneColumn />,
        source: OneColumnSrc,
      },
      {
        title: 'Two Column',
        example: <TwoColumn />,
        source: TwoColumnSrc,
      },
      {
        title: 'U Layout',
        example: <ULayout />,
        source: ULayoutSrc,
      },
      {
        title: 'Dashboard',
        example: <Dashboard />,
        source: DashboardSrc,
      },
      {
        title: 'Responsive Grid',
        description: 'Resize the browser window to see the regions reorder themselves.',
        example: <ResponsiveGrid />,
        source: ResponsiveGridSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Dynamic Grid',
        componentSrc: DynamicGridSrc,
      },
      {
        componentName: 'Region',
        componentSrc: RegionSrc,
      },
    ]}
  />
);

export default DocPage;
