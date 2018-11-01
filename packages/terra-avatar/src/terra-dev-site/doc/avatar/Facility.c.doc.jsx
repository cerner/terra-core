import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/facility.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import FacilitySrc from '!raw-loader!../../../../src/facility/Facility.jsx';

import AvatarFacility from '../example/AvatarFacility';
import AvatarFacilitySrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AvatarFacility';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Facility',
        example: <AvatarFacility />,
        source: AvatarFacilitySrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Avatar',
        componentSrc: FacilitySrc,
      },
    ]}
  />
);

export default DocPage;
