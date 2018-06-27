import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-slide-group"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-slide-group"
    readme={ChangeLog}
  />
);

export default DocPage;
