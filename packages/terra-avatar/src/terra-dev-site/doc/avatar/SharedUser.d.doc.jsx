import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/shared-user.md';
import { name, version } from '../../../../package.json';

// Component Source
import src from '!raw-loader!../../../../src/variants/SharedUser.jsx';
import SharedUser from '../example/shared-user/SharedUser';
import SharedUserSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/shared-user/SharedUser';
import SharedUserSize from '../example/shared-user/SharedUserSize';
import SharedUserSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/shared-user/SharedUserSize';
import SharedUserColorVariants from '../example/shared-user/SharedUserColorVariants';
import SharedUserColorVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/shared-user/SharedUserColorVariants';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <SharedUser />,
        source: SharedUserSrc,
      },
      {
        title: 'Override Size',
        example: <SharedUserSize />,
        source: SharedUserSizeSrc,
      },
      {
        title: 'Toggle Color Variants - Theme Specific',
        example: <SharedUserColorVariants />,
        source: SharedUserColorVariantsSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Shared User',
        componentSrc: src,
      },
    ]}
  />
);

export default DocPage;
