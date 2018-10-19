import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="show-hide"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/show-hide"
    readme={ChangeLog}
  />
);

export default DocPage;
