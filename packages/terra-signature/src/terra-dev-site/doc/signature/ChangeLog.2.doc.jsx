import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-signature"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-signature"
    readme={ChangeLog}
  />
);

export default DocPage;
