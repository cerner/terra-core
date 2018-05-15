/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-demographics-banner/docs/README.md';
import { name } from 'terra-demographics-banner/package.json';
import DemographicsBanner from 'terra-demographics-banner';

// Component Source
import DemographicsBannerSrc from '!raw-loader!terra-demographics-banner/src/DemographicsBanner.jsx';

// Example Source
import DemographicsBannerAdditionalAges from './DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalAgesSrc from '!raw-loader!./DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalDetails from './DemographicsBannerAdditionalDetails';
import DemographicsBannerAdditionalDetailsSrc from '!raw-loader!./DemographicsBannerAdditionalDetails';
import DemographicsBannerBasic from './DemographicsBannerBasic';
import DemographicsBannerBasicSrc from '!raw-loader!./DemographicsBannerBasic';
import DemographicsBannerDeceased from './DemographicsBannerDeceased';
import DemographicsBannerDeceasedSrc from '!raw-loader!./DemographicsBannerDeceased';
import DemographicsBannerSmallContainer from './DemographicsBannerSmallContainer';
import DemographicsBannerSmallContainerSrc from '!raw-loader!./DemographicsBannerSmallContainer';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Basic Demographics Banner',
        example: <DemographicsBannerBasic />,
        source: DemographicsBannerBasicSrc,
      },
      {
        title: 'Demographics Banner with Missing Data',
        example: <DemographicsBanner />,
        source: DemographicsBannerSrc,
      },
      {
        title: 'Deceased Demographics Banners',
        example: <DemographicsBannerDeceased />,
        source: DemographicsBannerDeceasedSrc,
      },
      {
        title: 'Demographics Banner with Gestational and Post Menstrural Ages',
        example: <DemographicsBannerAdditionalAges />,
        source: DemographicsBannerAdditionalAgesSrc,
      },
      {
        title: 'Demographics Banner with Additional Details',
        example: <DemographicsBannerAdditionalDetails />,
        source: DemographicsBannerAdditionalDetailsSrc,
      },
      {
        title: 'Demographics Banner in a Small Container',
        example: <DemographicsBannerSmallContainer />,
        source: DemographicsBannerSmallContainerSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Demographics Banner',
        componentSrc: DemographicsBannerSrc,
      },
    ]}
  />
);

export default DocPage;
