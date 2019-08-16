import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ImageSrc from '!raw-loader!../../../../src/Image';

// Example Files
import ImageDefault from '../example/ImageDefault';
import ImageDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ImageDefault';
import ImageFit from '../example/ImageFitTypes';
import ImageFitSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ImageFitTypes';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Image',
        example: <ImageDefault />,
        source: ImageDefaultSrc,
      },
      {
        title: 'Toggle Image Fit',
        example: <ImageFit />,
        source: ImageFitSrc,
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
