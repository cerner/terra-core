import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/facility.md';
import { name, version } from '../../../../package.json';

// Component Source
import FacilitySrc from '!raw-loader!../../../../src/variants/Facility.jsx';
import Facility from '../example/facility/Facility';
import FacilityExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/facility/Facility';
import FacilityImage from '../example/facility/FacilityImage';
import FacilityImageSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/facility/FacilityImage';
import FacilitySize from '../example/facility/FacilitySize';
import FacilitySizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/facility/FacilitySize';
import FacilityColorVariants from '../example/facility/FacilityColorVariants';
import FacilityColorVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/facility/FacilityColorVariants';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
      {
        title: 'Toggle Color Variants - Theme Specific',
        example: <FacilityColorVariants />,
        source: FacilityColorVariantsSrc,
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
