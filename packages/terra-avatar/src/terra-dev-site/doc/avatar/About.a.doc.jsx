import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/about.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
// import AvatarSrc from '!raw-loader!../../../../src/avatar/Avatar.jsx';

// Example Files

/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
  />
);

export default DocPage;
