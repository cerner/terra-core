import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/ResponsiveElement-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import BreakpointExample from '../example/BreakpointExample';
import BreakpointExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BreakpointExample';
import ResizeExample from '../example/ResizeExample';
import ResizeExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ResizeExample';
import UncontrolledBreakpointExample from '../example/UncontrolledBreakpointExample';
import UncontrolledBreakpointExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/UncontrolledBreakpointExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element"
    propsTablesMarkdown={[PropsTable]}
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
