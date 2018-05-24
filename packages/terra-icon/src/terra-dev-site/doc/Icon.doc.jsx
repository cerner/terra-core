/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-icon/docs/README.md';
import { name } from 'terra-icon/package.json';

// Component Source
import IconSrc from '!raw-loader!terra-icon/src/IconBase';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Icon',
        componentSrc: IconSrc,
      },
    ]}
  />
);

export default DocPage;
