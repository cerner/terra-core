import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-time-input"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-time-input"
    readme={ChangeLog}
  />
);

export default DocPage;
