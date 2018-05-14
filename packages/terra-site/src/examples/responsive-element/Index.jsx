/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-responsive-element/docs/README.md';
import { name } from 'terra-responsive-element/package.json';

// Component Source
import ResponsiveElementSrc from '!raw-loader!terra-responsive-element/src/ResponsiveElement';

// Example Files
import AllParentResponsiveExample from './AllParentResponsiveExample';
import AllParentResponsiveExampleSrc from '!raw-loader!./AllParentResponsiveExample';
import DefaultMediumResponsiveExample from './DefaultMediumResponsiveExample';
import DefaultMediumResponsiveExampleSrc from '!raw-loader!./DefaultMediumResponsiveExample';
import MediumResponsiveExample from './MediumResponsiveExample';
import MediumResponsiveExampleSrc from '!raw-loader!./MediumResponsiveExample';
import AllWindowResponsiveExample from './AllWindowResponsiveExample';
import AllWindowResponsiveExampleSrc from '!raw-loader!./AllWindowResponsiveExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Responsive to Parent',
        description: 'All Breakpoints',
        example: <AllParentResponsiveExample />,
        source: AllParentResponsiveExampleSrc,
      },
      {
        title: 'Default and Medium Breakpoints',
        example: <DefaultMediumResponsiveExample />,
        source: DefaultMediumResponsiveExampleSrc,
      },
      {
        title: 'Medium Breakpoints',
        example: <MediumResponsiveExample />,
        source: MediumResponsiveExampleSrc,
      },
      {
        title: 'Responsive to Window',
        description: 'Note: Changing the container size has no effect when responsive to window. Resize the window to examine changes.',
        example: <AllWindowResponsiveExample />,
        source: AllWindowResponsiveExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Responsive Element',
        componentSrc: ResponsiveElementSrc,
      },
    ]}
  />
);

export default DocPage;
