/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from '../../../packages/terra-site/src/PropsTable';
import Markdown from '../../../packages/terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CompactTileSrc from '!raw-loader!../src/CompactTile.jsx';
// Example Files
import CompactTileStandard from './ComptactTileStandard';
import CompactTileTwoColumn from './CompactTileTwoColumn';
import CompactTileTwoColumnLeft from './CompactTileTwoColumnLeft';
import CompactTileComment from './CompactTileComment';
import CompactTileAll from './CompactTileAll';

const CompactTileExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ButtonSrc} />
    <h2 id="standard">Standard Displays</h2>
    <CompactTileStandard />
    <h2 id="outline-variant">Two Column CompactTile</h2>
    <CompactTileTwoColumn />
    <h2 id="link-variant">Left Emphasis CompactTile</h2>
    <CompactTileTwoColumnLeft />
    <h2 id="link-variant">Comment CompactTile</h2>
    <CompactTileComment />
    <h2 id="link-variant">All Elements CompactTile</h2>
    <CompactTileAll />
  </div>
);

export default CompactTileExamples;
