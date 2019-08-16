import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
// Component Source
import DynamicGridSrc from '!raw-loader!../../../../src/DynamicGrid';
import RegionSrc from '!raw-loader!../../../../src/Region';

// Example Files
import OneColumn from '../example/OneColumn';
import OneColumnSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OneColumn';
import TwoColumn from '../example/TwoColumn';
import TwoColumnSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TwoColumn';
import ULayout from '../example/ULayout';
import ULayoutSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ULayout';
import Dashboard from '../example/Dashboard';
import DashboardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Dashboard';
import ResponsiveGrid from '../example/ResponsiveGrid';
import ResponsiveGridSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ResponsiveGrid';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
