/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-filter-view"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-filter-view"
    readme={ChangeLog}
  />
);

export default DocPage;
