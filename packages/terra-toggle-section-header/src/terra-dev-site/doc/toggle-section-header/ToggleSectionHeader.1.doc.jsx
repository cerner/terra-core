import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import DefaultToggleSectionHeader from '../example/DefaultToggleSectionHeader';
import DefaultToggleSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultToggleSectionHeader';
import AnimatedToggleSectionHeader from '../example/AnimatedToggleSectionHeader';
import AnimatedToggleSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedToggleSectionHeader';
import TransparentToggleSectionHeader from '../example/TransparentToggleSectionHeader';
import TransparentToggleSectionHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TransparentToggleSectionHeader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <DefaultToggleSectionHeader />,
        source: DefaultToggleSectionHeaderSrc,
      },
      {
        title: 'Animated',
        example: <AnimatedToggleSectionHeader />,
        source: AnimatedToggleSectionHeaderSrc,
      },
      {
        title: 'Transparent',
        example: <TransparentToggleSectionHeader />,
        source: TransparentToggleSectionHeaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: '',
        componentSrc: '',
        componentProps: '',
      },
    ]}
  />
);

export default DocPage;
