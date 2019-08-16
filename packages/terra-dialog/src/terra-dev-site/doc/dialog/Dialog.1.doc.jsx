import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import PropsTable from '../../../../docs/Dialog-props-table.md';
import { name, version } from '../../../../package.json';

// Example Files
import DialogDefault from '../example/DialogDefault';
import DialogDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogDefault';
import DialogLongContent from '../example/DialogLongContent';
import DialogLongContentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogLongContent';
import DialogNoClose from '../example/DialogNoClose';
import DialogNoCloseSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogNoClose';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
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
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
