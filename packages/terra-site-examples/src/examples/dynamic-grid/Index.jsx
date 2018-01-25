/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-dynamic-grid/docs/README.md';
import { version } from 'terra-dynamic-grid/package.json';

import OneColumn from './OneColumn';
import TwoColumn from './TwoColumn';
import ULayout from './ULayout';
import Dashboard from './Dashboard';
import ResponsiveGrid from './ResponsiveGrid';


// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import DynamicGridSrc from '!raw-loader!terra-dynamic-grid/src/DynamicGrid';
import RegionSrc from '!raw-loader!terra-dynamic-grid/src/Region';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files

const DynamicGridExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DynamicGridSrc} componentName="Dynamic Grid" />
    <PropsTable id="props" src={RegionSrc} componentName="Region" />
    <h2>One Column</h2>
    <OneColumn />
    <h2>Two Column</h2>
    <TwoColumn />
    <h2>U Layout</h2>
    <ULayout />
    <h2>Dashboard</h2>
    <Dashboard />
    <h2>Responsive Grid</h2>
    <p>Resize the browser window to see the regions reorder themselves.</p>
    <ResponsiveGrid />
  </div>
);

export default DynamicGridExamples;
