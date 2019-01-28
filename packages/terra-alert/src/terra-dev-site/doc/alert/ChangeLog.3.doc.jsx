import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-alert"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-alert"
    readme={ChangeLog}
  />
);

export default DocPage;
