import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/SingleSelectSections.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SingleSelectSrc from '!raw-loader!terra-list/src/SingleSelectList';
import SingleSelectSectionSrc from '!raw-loader!terra-list/src/Section';
// Example File
import SingleSelectSectionsExamples from '../example/SingleSelectSections';
import SingleSelectSectionsExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SingleSelectSections';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Single Select List with Sections',
        example: <SingleSelectSectionsExamples />,
        source: SingleSelectSectionsExamplesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Single Select List with Sections',
        componentSrc: SingleSelectSrc,
      },
      {
        componentName: 'Single Select List Sections',
        componentSrc: SingleSelectSectionSrc,
      },
    ]}
  />
);

export default DocPage;
