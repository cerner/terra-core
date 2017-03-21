/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DetailViewSrc from '!raw-loader!../src/DetailView.jsx';

// Example files
import DetailViewDivided from './DetailViewDivided';
import DetailViewNoDivider from './DetailViewNoDivider';

const DetailViewExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Detail View</h2>
    <PropsTable id="props" src={DetailViewSrc} />
    <h2 id="Divided">Divided</h2>
    <DetailViewDivided />
    <h2 id="NoDivider">No Divider</h2>
    <DetailViewNoDivider />
  </div>
);

export default DetailViewExamples;
