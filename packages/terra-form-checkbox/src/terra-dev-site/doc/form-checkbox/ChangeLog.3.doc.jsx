import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-form-checkbox"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox"
    readme={ChangeLog}
  />
);

export default DocPage;
