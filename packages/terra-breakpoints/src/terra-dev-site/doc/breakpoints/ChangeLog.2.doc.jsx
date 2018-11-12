import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="breakpoints"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/breakpoints"
    readme={ChangeLog}
  />
);

export default DocPage;
