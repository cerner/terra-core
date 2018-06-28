import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-scroll"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-scroll"
    readme={ChangeLog}
  />
);

export default DocPage;
