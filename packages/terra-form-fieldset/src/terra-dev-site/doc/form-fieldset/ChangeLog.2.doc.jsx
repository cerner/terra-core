import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-form-fieldset"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-fieldset"
    readme={ChangeLog}
  />
);

export default DocPage;
