import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-status"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-status"
    readme={ChangeLog}
  />
);

export default DocPage;
