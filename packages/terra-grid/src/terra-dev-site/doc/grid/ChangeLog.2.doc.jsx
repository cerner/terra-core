import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-grid"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-grid"
    readme={ChangeLog}
  />
);

export default DocPage;
