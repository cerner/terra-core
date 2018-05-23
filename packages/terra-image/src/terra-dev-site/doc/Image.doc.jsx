/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-image/docs/README.md';
import { name } from 'terra-image/package.json';

// Component Source
import ImageSrc from '!raw-loader!terra-image/src/Image';

// Example Files
import ImageDefault from './example/ImageDefault';
import ImageDefaultSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ImageDefault';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Image',
        example: <ImageDefault />,
        source: ImageDefaultSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Image',
        componentSrc: ImageSrc,
      },
    ]}
  />
);

export default DocPage;
