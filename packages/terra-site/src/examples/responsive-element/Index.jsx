/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-responsive-element/docs/README.md';
import { name } from 'terra-responsive-element/package.json';

// Component Source
import ResponsiveElementSrc from '!raw-loader!terra-responsive-element/src/ResponsiveElement';

// Example Files
import ResponsiveExample from './ResponsiveExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Responsive to Parent',
        description: 'All Breakpoints',
        example: (
          <ResponsiveExample
            defaultElement={<div>Default</div>}
            tiny={<div>Tiny</div>}
            small={<div>Small</div>}
            medium={<div>Medium</div>}
            large={<div>Large</div>}
            huge={<div>Huge</div>}
          />
        ),
      },
      {
        title: 'Default and Medium Breakpoints',
        example: (
          <ResponsiveExample
            defaultElement={<div>Default</div>}
            medium={<div>Medium</div>}
          />
        ),
      },
      {
        title: 'Medium Breakpoints',
        description: <p>Note: Does not render elements when smaller than medium.</p>,
        example: <ResponsiveExample medium={<div>Medium</div>} />,
      },
      {
        title: 'Responsive to Window',
        description: <p>Note: Changing the container size has no effect when responsive to window. Resize the window to examine changes.</p>,
        example: (
          <ResponsiveExample
            responsiveTo="window"
            defaultElement={<div>Default</div>}
            tiny={<div>Tiny</div>}
            small={<div>Small</div>}
            medium={<div>Medium</div>}
            large={<div>Large</div>}
            huge={<div>Huge</div>}
          />
        ),
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
