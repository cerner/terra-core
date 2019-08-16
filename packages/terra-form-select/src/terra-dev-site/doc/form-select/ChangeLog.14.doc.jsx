/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-form-select"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    readme={ChangeLog}
  />
);

export default DocPage;
