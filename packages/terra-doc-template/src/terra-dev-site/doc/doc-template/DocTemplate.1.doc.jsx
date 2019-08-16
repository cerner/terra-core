import React from 'react';
import DocTemplate from '../../../../lib/DocTemplate';
import readme from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
import BadgeExamples from '../example/BadgeExamples';
import BadgeExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeExamples';
// Component Source
import DocTemplateSrc from '!raw-loader!../../../../src/DocTemplate';
/* eslint-disable-next-line import/no-self-import */
import SelfSrc from '!raw-loader!../../../../src/terra-dev-site/doc/doc-template/DocTemplate.1.doc';

const DocTemplateExamples = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={readme}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template"
    examples={[
      {
        title: 'DocTemplate',
        source: SelfSrc,
        example: (<p>This very page was generated using the DocTemplate. The template supports more than one Props Table and example, even though those were not featured here.</p>),
      },
      {
        title: 'Package Badge Examples',
        source: BadgeExamplesSrc,
        example: <BadgeExamples />,
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
