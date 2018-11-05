import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/facility.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import FacilitySrc from '!raw-loader!../../../../src/Facility.jsx';

import Facility from '../example/facility/Facility';
import FacilityExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/facility/Facility';
import FacilityImage from '../example/facility/FacilityImage';
import FacilityImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/facility/FacilityImage';
import FacilitySize from '../example/facility/FacilitySize';
import FacilitySizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/facility/FacilitySize';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default - Fallback Icon',
        example: <Facility />,
        source: FacilityExampleSrc,
      },
      {
        title: 'Image',
        example: <FacilityImage />,
        source: FacilityImageSrc,
      },
      {
        title: 'Override Size',
        example: <FacilitySize />,
        source: FacilitySizeSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Facility',
        componentSrc: FacilitySrc,
      },
    ]}
  />
);

export default DocPage;
