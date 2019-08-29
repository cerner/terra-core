import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/generic.md';
import { name, version } from '../../../../package.json';

// Component Source
import GenericSrc from '!raw-loader!../../../../src/variants/Generic.jsx';
import SingleUser from '../example/generic/single-user/GenericSingleUser';
import SingleUserSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/single-user/GenericSingleUser';
import SingleUserSize from '../example/generic/single-user/GenericSingleUserSize';
import SingleUserSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/single-user/GenericSingleUserSize';
import SingleUserColorVariants from '../example/generic/single-user/GenericSingleUserColorVariants';
import SingleUserColorVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/single-user/GenericSingleUserColorVariants';

import SharedUser from '../example/generic/shared-user/GenericSharedUser';
import SharedUserSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/shared-user/GenericSharedUser';
import SharedUserSize from '../example/generic/shared-user/GenericSharedUserSize';
import SharedUserSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/shared-user/GenericSharedUserSize';
import SharedUserColorVariants from '../example/generic/shared-user/GenericSharedUserColorVariants';
import SharedUserColorVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/shared-user/GenericSharedUserColorVariants';

import Provider from '../example/generic/provider/Provider';
import ProviderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/provider/Provider';
import ProviderSize from '../example/generic/provider/ProviderSize';
import ProviderSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/provider/ProviderSize';
import ProviderColorVariants from '../example/generic/provider/ProviderColorVariants';
import ProviderColorVariantsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/generic/provider/ProviderColorVariants';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Single User - Default',
        example: <SingleUser />,
        source: SingleUserSrc,
      },
      {
        title: 'Single User - Override Size',
        example: <SingleUserSize />,
        source: SingleUserSizeSrc,
      },
      {
        title: 'Single User - Toggle Color Variants - Theme Specific',
        example: <SingleUserColorVariants />,
        source: SingleUserColorVariantsSrc,
      },
      {
        title: 'Shared User - Default',
        example: <SharedUser />,
        source: SharedUserSrc,
      },
      {
        title: 'Shared User - Override Size',
        example: <SharedUserSize />,
        source: SharedUserSizeSrc,
      },
      {
        title: 'Shared User - Toggle Color Variants - Theme Specific',
        example: <SharedUserColorVariants />,
        source: SharedUserColorVariantsSrc,
      },
      {
        title: 'Provider - Default',
        example: <Provider />,
        source: ProviderSrc,
      },
      {
        title: 'Provider - Override Size',
        example: <ProviderSize />,
        source: ProviderSizeSrc,
      },
      {
        title: 'Provider - Toggle Color Variants - Theme Specific',
        example: <ProviderColorVariants />,
        source: ProviderColorVariantsSrc,
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
