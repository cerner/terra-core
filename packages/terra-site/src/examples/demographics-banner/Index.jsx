/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-demographics-banner/docs/README.md';
import { version } from 'terra-demographics-banner/package.json';
import DemographicsBanner from 'terra-demographics-banner';

import DemographicsBannerAdditionalAges from './DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalDetails from './DemographicsBannerAdditionalDetails';
import DemographicsBannerBasic from './DemographicsBannerBasic';
import DemographicsBannerDeceased from './DemographicsBannerDeceased';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DemographicsBannerSrc from '!raw-loader!terra-demographics-banner/src/DemographicsBanner.jsx';

const DemographicsBannerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DemographicsBannerSrc} />
    <h1>Basic Demographics Banner</h1>
    <DemographicsBannerBasic />
    <br />
    <h1>Demographics Banner with Missing Data</h1>
    <DemographicsBanner />
    <br />
    <h1>Deceased Demographics Banners</h1>
    <DemographicsBannerDeceased />
    <br />
    <h1>Demographics Banner with Gestational and Post Menstrural ages</h1>
    <DemographicsBannerAdditionalAges />
    <br />
    <h1>Demographics Banner with Additional Details</h1>
    <DemographicsBannerAdditionalDetails />
  </div>
);

export default DemographicsBannerExamples;
