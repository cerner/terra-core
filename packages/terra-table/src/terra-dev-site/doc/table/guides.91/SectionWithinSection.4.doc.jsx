import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../../docs/guides/SectionWithinSection.md';
import { name } from '../../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import SectionWithSubsection1 from '../../guides/SectionWithSubsection1';
import SectionWithSubsection1Src from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/SectionWithSubsection1';

import SectionWithSubsection2 from '../../guides/SectionWithSubsection2';
import SectionWithSubsection2Src from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/SectionWithSubsection2';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Collapsible sections with static subsections',
        example: <SectionWithSubsection1 />,
        source: SectionWithSubsection1Src,
      },
      {
        title: 'Static sections with collapsible subsections',
        example: <SectionWithSubsection2 />,
        source: SectionWithSubsection2Src,
      },
    ]}
  />
);

export default DocPage;
