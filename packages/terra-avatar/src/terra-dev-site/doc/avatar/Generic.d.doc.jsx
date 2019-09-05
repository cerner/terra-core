import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/generic.md';
import { name, version } from '../../../../package.json';

// Component Source
import GenericSrc from '!raw-loader!../../../../src/variants/Generic.jsx';
import GenericAvatarVariants from '../example/generic/GenericAvatarVariants';
import GenericAvatarVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/GenericAvatarVariants';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Generic Avatar - Icons',
        example: <GenericAvatarVariants />,
        source: GenericAvatarVariantsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Generic',
        componentSrc: GenericSrc,
      },
    ]}
  />
);

export default DocPage;
