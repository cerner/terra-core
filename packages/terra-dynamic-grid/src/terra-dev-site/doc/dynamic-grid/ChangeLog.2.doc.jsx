import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-dynamic-grid"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-dynamic-grid"
    readme={ChangeLog}
  />
);

export default DocPage;
