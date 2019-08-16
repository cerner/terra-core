import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/Dialog-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import DialogDefault from '../example/DialogDefault';
import DialogDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogDefault';
import DialogLongContent from '../example/DialogLongContent';
import DialogLongContentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogLongContent';
import DialogNoClose from '../example/DialogNoClose';
import DialogNoCloseSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DialogNoClose';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
