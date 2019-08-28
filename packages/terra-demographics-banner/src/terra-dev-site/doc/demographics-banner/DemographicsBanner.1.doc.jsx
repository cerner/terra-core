import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
import DemographicsBanner from '../../../DemographicsBanner';
// Component Source
import DemographicsBannerPropsTable from '!terra-props-table-loader!../../../../src/DemographicsBanner';
import DemographicsBannerSrc from '!raw-loader!../../../../src/DemographicsBanner.jsx';

// Example Source
import DemographicsBannerAdditionalAges from '../example/DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalAgesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalDetails from '../example/DemographicsBannerAdditionalDetails';
import DemographicsBannerAdditionalDetailsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerAdditionalDetails';
import DemographicsBannerBasic from '../example/DemographicsBannerBasic';
import DemographicsBannerBasicSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerBasic';
import DemographicsBannerDeceased from '../example/DemographicsBannerDeceased';
import DemographicsBannerDeceasedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerDeceased';
import DemographicsBannerSmallContainer from '../example/DemographicsBannerSmallContainer';
import DemographicsBannerSmallContainerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DemographicsBannerSmallContainer';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
        componentProps: DemographicsBannerPropsTable,
      },
    ]}
  />
);

export default DocPage;
