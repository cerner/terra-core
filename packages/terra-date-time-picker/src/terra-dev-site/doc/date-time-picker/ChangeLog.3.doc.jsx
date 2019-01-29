import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-date-time-picker"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-date-time-picker"
    readme={ChangeLog}
  />
);

export default DocPage;
