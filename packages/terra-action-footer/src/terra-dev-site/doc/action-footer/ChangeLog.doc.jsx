import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-action-footer"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer"
    readme={ChangeLog}
  />
);

export default DocPage;
