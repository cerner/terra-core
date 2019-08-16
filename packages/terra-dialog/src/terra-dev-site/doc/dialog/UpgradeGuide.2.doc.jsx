/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgradeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-dialog"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-dialog"
    readme={UpgradeGuide}
  />
);

export default DocPage;
