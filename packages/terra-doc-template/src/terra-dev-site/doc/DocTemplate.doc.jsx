import React from 'react';
import DocTemplate from '../../../lib/DocTemplate';

import readme from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DocTemplateSrc from '!raw-loader!../../../src/DocTemplate';
import SelfSrc from '!raw-loader!../../../src/terra-dev-site/doc/DocTemplate.doc';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocTemplateExamples = () => (
  <DocTemplate
    packageName={name}
    readme={readme}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template"
    examples={[
      {
        title: 'DocTemplate',
        source: SelfSrc,
        example: (<p>This very page was generated using the DocTemplate. The template supports more than one Props Table and example, even though those were not featured here.</p>),
      },
    ]}
    propsTables={[
      {
        componentName: 'DocTemplate',
        componentSrc: DocTemplateSrc,
      },
    ]}
  />
);

export default DocTemplateExamples;
