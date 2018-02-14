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
    <h3>All Breakpoints</h3>
    <ResponsiveExample
      defaultElement={<div>Default</div>}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
    />
    <br />
    <h3>Default and Medium Breakpoints</h3>
    <ResponsiveExample
      defaultElement={<div>Default</div>}
      medium={<div>Medium</div>}
    />
    <br />
    <h3>Only Medium</h3>
    <p>Note: Does not render elements when smaller than medium.</p>
    <ResponsiveExample medium={<div>Medium</div>} />
    <br />
    <h2>Responsive to Window</h2>
    <p>Note: Changing the container size has no effect when responsive to window. Resize the window to examine changes.</p>
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
