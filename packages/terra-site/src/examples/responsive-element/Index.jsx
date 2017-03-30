import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-responsive-element/docs/README.md';
import { version } from 'terra-responsive-element/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ResponsiveElementSrc from '!raw-loader!terra-responsive-element/src/ResponsiveElement';

// Example Files
import ResponsiveExample from './ResponsiveExample';

const ResponsiveElementExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ResponsiveElementSrc} />
    <h2>Responsive to Parent</h2>
    <h4>All Breakpoints</h4>
    <ResponsiveExample
      defaultElement={<div>Default</div>}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
    />
    <br />
    <h4>Default and Medium Breakpoints</h4>
    <ResponsiveExample
      defaultElement={<div>Default</div>}
      medium={<div>Medium</div>}
    />
    <br />
    <h4>Only Medium</h4>
    <h5>Note: Does not render elements when smaller than medium.</h5>
    <ResponsiveExample medium={<div>Medium</div>} />
    <h2>Responsive to Window</h2>
    <h5>Note: Changing the container size has no effect when responsive to window. Resize the window to examine changes.</h5>
    <ResponsiveExample
      responsiveTo="window"
      defaultElement={<div>Default</div>}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
    />
  </div>
);

export default ResponsiveElementExamples;
