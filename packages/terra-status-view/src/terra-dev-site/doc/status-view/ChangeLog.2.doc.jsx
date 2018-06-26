import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-status-view"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-status-view"
    readme={ChangeLog}
  />
);

export default DocPage;
