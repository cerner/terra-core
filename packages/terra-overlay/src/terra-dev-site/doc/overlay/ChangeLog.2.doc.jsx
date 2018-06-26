import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-overlay"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-overlay"
    readme={ChangeLog}
  />
);

export default DocPage;
