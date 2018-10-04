import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="visually-hidden-text"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/visually-hidden-text"
    readme={ChangeLog}
  />
);

export default DocPage;
