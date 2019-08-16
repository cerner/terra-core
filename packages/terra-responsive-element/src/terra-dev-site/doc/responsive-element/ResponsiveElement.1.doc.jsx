import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
import ResponsiveElementSrc from '!raw-loader!../../../../src/ResponsiveElement';
import BreakpointExample from '../example/BreakpointExample';
import BreakpointExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BreakpointExample';
import ResizeExample from '../example/ResizeExample';
import ResizeExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ResizeExample';
import UncontrolledBreakpointExample from '../example/UncontrolledBreakpointExample';
import UncontrolledBreakpointExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/UncontrolledBreakpointExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName="terra-responsive-element"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element"
    propsTables={[
      {
        componentName: 'Responsive Element',
        componentSrc: ResponsiveElementSrc,
      },
    ]}
    examples={[
      {
        title: 'Responsive Breakpoints',
        description: 'An example demonstrating the callback events during a breakpoint change.',
        example: <BreakpointExample />,
        source: BreakpointExampleSrc,
      },
      {
        title: 'Responsive Resizing',
        description: 'An example demonstrating the callback events during a resize.',
        example: <ResizeExample />,
        source: ResizeExampleSrc,
      },
      {
        title: 'Uncontrolled Example',
        description: 'An example of an uncontrolled implementation of the ResponsiveElement.',
        example: <UncontrolledBreakpointExample />,
        source: UncontrolledBreakpointExampleSrc,
      },
    ]}
  />
);

export default DocPage;
