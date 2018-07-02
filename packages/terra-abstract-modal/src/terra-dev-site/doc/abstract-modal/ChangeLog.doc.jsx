/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-abstract-modal"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-abstract-modal"
    readme={ChangeLog}
  />
);

export default DocPage;
