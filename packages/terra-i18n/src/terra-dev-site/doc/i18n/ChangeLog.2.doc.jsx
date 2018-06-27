import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-i18n"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-i18n"
    readme={ChangeLog}
  />
);

export default DocPage;
