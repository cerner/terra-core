/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from '../../../../terra-doc-template/src/DocTemplate';

import readme from '../../../../terra-doc-template/docs/README.md';
import { version } from '../../../../terra-doc-template/package.json';

// Component Source
import DocTemplateSrc from '!raw-loader!../../../../terra-doc-template/src/DocTemplate';
import SelfSrc from '!raw-loader!./Index';

const DocTemplateExamples = () => (
  <DocTemplate
    version={version}
    readme={readme}
    examples={[{ title: 'DocTemplate', source: SelfSrc, example: (<p>This very page was generated using the DocTemplate. The template supports more than one Props Table and example, even though those were not featured here.</p>) }]}
    propsTables={[{ componentName: 'DocTemplate', componentSource: DocTemplateSrc }]}
  />
);

export default DocTemplateExamples;
