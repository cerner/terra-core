import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import StatusView from 'terra-status-view';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import ReadMe from 'terra-status-view/docs/README.md';
import { version } from 'terra-status-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import StatusViewSrc from '!raw-loader!terra-status-view/src/StatusView';

// Example Files
import StatusViewTemplate from './StatusViewTemplate';

const StatusExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={StatusViewSrc} />
    <h2 id="default-empty">Status View:  No props given</h2>
    <StatusViewTemplate style={{ width: '500px' }} />
    <br />
    <h2 id="default-all">Status View:  All props given</h2>
    <StatusViewTemplate
      style={{ width: '500px' }}
      variant={StatusView.Opts.variants.NODATA}
      title="500"
      message="An exception was thrown"
      customGlyph={<IconDiamond />}
    >
      <Button text="OK" key="1" size="medium" />
      <Button text="Cancel" key="2" size="medium" />
    </StatusViewTemplate>
    <br />
    <h2 id="wrap-text">Status View:  Text Wrapping</h2>
    <StatusViewTemplate
      style={{ width: '500px' }}
      variant={StatusView.Opts.variants.ERROR}
      title="A 500 error was thrown from the service.  Retry again later when new service is deployed at a later date in the future."
      message="A null pointer exception was thrown from the input parameters.  The params of min and max-value were not present.  They need to be present for verification purposes for keeping the database clean and consistent"
      customGlyph={<IconDiamond />}
    >
      <Button text="OK, here is some really really long text to make the button take up a bunch of space." key="1" size="medium" />
      <Button text="Cancel, here is some really really long text to make the button take up a bunch of space." key="2" size="medium" />
    </StatusViewTemplate>
    <br />
    <h2 id="glyph-hidden">Status View:  Glyph Hidden</h2>
    <StatusViewTemplate
      style={{ width: '500px' }}
      variant={StatusView.Opts.variants.ERROR}
      message="An exception was thrown"
      isGlyphHidden
      title="500"
    >
      <Button text="OK" key="1" size="medium" />
      <Button text="Cancel" key="2" size="medium" />
    </StatusViewTemplate>
    <br />
    <h2 id="large">Status View:  Large Container</h2>
    <StatusViewTemplate
      style={{ height: '500px', width: '500px' }}
      variant={StatusView.Opts.variants.ERROR}
      message="An exception was thrown"
      customGlyph={<IconDiamond />}
      title="500"
    >
      <Button text="OK" key="1" size="medium" />
      <Button text="Cancel" key="2" size="medium" />
    </StatusViewTemplate>
    <br />
    <h2 id="align-top">Status View:  Align Top</h2>
    <StatusViewTemplate
      style={{ height: '500px', width: '500px' }}
      isAlignedTop
      variant={StatusView.Opts.variants.ERROR}
      message="An exception was thrown"
      customGlyph={<IconDiamond />}
      title="500"
    >
      <Button text="OK" key="1" size="medium" />
      <Button text="Cancel" key="2" size="medium" />
    </StatusViewTemplate>
    <br />
    <h2 id="glyph-small">Status View:  Glyph cannot fit</h2>
    <StatusViewTemplate
      style={{ height: '220px', width: '500px', overflow: 'auto' }}
      variant={StatusView.Opts.variants.ERROR}
      message="An exception was thrown"
      customGlyph={<IconDiamond />}
      title="500"
    >
      <Button text="OK" key="1" size="medium" />
      <Button text="Cancel" key="2" size="medium" />
    </StatusViewTemplate>
  </div>
);

export default StatusExamples;
