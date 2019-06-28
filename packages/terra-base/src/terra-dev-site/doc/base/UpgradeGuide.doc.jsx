import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgardeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-base"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-base"
    readme={UpgardeGuide}
  />
);

export default DocPage;
