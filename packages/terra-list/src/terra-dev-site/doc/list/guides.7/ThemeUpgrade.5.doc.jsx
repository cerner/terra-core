/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../../docs/guides/ThemeUpgrade.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-list"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-list"
    readme={ReadMe}
  />
);

export default DocPage;
