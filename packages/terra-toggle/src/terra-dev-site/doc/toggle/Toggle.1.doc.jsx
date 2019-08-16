import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
<<<<<<< HEAD
import PropsTable from '../../../../docs/Toggle-props-table.md';
import { name, version } from '../../../../package.json';
=======
import { name, version } from '../../../../package.json';
>>>>>>> master

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import DefaultToggle from '../example/DefaultToggle';
import DefaultToggleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultToggle';
import AnimatedToggle from '../example/AnimatedToggle';
import AnimatedToggleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AnimatedToggle';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Toggle',
        example: <DefaultToggle />,
        source: DefaultToggleSrc,
      },
      {
        title: 'isAnimated Toggle',
        example: <AnimatedToggle />,
        source: AnimatedToggleSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
