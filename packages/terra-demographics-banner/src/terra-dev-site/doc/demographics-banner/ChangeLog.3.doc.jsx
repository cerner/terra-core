import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-demographics-banner"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner"
    readme={ChangeLog}
  />
);

export default DocPage;
