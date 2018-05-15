/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-dialog/docs/README.md';
import { name } from 'terra-dialog/package.json';

// Component Source
import DialogSrc from '!raw-loader!terra-dialog/src/Dialog';

// Example Files
import DialogDefault from './DialogDefault';
import DialogDefaultSrc from '!raw-loader!./DialogDefault';
import DialogLongContent from './DialogLongContent';
import DialogLongContentSrc from '!raw-loader!./DialogLongContent';
import DialogNoClose from './DialogNoClose';
import DialogNoCloseSrc from '!raw-loader!./DialogNoClose';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Dialog - Default',
        example: <DialogDefault />,
        source: DialogDefaultSrc,
      },
      {
        title: 'Dialog - Long Content',
        example: <DialogLongContent />,
        source: DialogLongContentSrc,
      },
      {
        title: 'Dialog - No Close Button',
        example: <DialogNoClose />,
        source: DialogNoCloseSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Dialog',
        componentSrc: DialogSrc,
      },
    ]}
  />
);

export default DocPage;
