import React from 'react';
import DocTemplate from '../../../DocTemplate';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-doc-template"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template"
    readme={ChangeLog}
  />
);

export default DocPage;
