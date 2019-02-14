/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgradeGuide from '../../../../../docs/guides/ThemeUpgrade.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-table"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-table"
    readme={UpgradeGuide}
  />
);

export default DocPage;
