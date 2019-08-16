/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from '../../../DocTemplate';
import UpgradeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-doc-template"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template"
    readme={UpgradeGuide}
  />
);

export default DocPage;
