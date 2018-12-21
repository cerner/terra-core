/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgradeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-button-group"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-button-group"
    readme={UpgradeGuide}
  />
);

export default DocPage;
