/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import StatusView from 'terra-status-view';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import ReadMe from 'terra-status-view/docs/README.md';
import { name } from 'terra-status-view/package.json';

// Component Source
import StatusViewSrc from '!raw-loader!terra-status-view/src/StatusView';

// Example Files
import StatusViewTemplate from './StatusViewTemplate';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Status View:  No props given',
        example: <StatusViewTemplate style={{ width: '500px' }} />,
      },
      {
        title: 'Status View:  All props given',
        example: (
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
        ),
      },
      {
        title: 'Status View:  Text Wrapping',
        example: (
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
        ),
      },
      {
        title: 'Status View:  Glyph Hidden',
        example: (
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
        ),
      },
      {
        title: 'Status View:  Large Container',
        example: (
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
        ),
      },
      {
        title: 'Status View:  Align Top',
        example: (
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
        ),
      },
      {
        title: 'Status View:  Glyph cannot fit',
        example: (
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
        ),
      },
    ]}
    propsTables={[
      {
        componentName: 'Status View',
        componentSrc: StatusViewSrc,
      },
    ]}
  />
);

export default DocPage;
