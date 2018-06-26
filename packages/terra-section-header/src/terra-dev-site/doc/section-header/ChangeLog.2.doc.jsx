import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-section-header"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-section-header"
    readme={ChangeLog}
  />
);

export default DocPage;
