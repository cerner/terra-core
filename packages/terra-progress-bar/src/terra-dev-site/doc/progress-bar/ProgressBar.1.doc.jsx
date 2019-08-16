import React from 'react';
import DocTemplate from 'terra-doc-template';
import Markdown from 'terra-markdown';
import ReadMe from '../../../../docs/README.md';
import ProgressBarColorDocs from '../../../../docs/progress-bar-color.md';
import ProgressBarTwoColorsDocs from '../../../../docs/progress-bar-two-colors.md';
import ProgressBarCustomizedColorsDocs from '../../../../docs/progress-bar-customized-colors.md';
import PropsTable from '../../../../docs/ProgressBar-props-table.md';
import { name, version } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

// Example Files
import ProgressBarDefault from '../example/ProgressBarDefault';
import ProgressBarDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarDefault';
import ProgressBarSize from '../example/ProgressBarSize';
import ProgressBarSizeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarSize';
import ProgressBarColor from '../example/ProgressBarColor';
import ProgressBarColorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarColor';
import ProgressBarTwoColors from '../example/ProgressBarTwoColors';
import ProgressBarTwoColorsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarTwoColors';
import ProgressBarCustomizedColors from '../example/ProgressBarCustomizedColors';
import ProgressBarCustomizedColorsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressBarCustomizedColors';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <ProgressBarDefault />,
        source: ProgressBarDefaultSrc,
      },
      {
        title: 'Size',
        example: <ProgressBarSize />,
        source: ProgressBarSizeSrc,
      },
      {
        title: 'Color',
        description: <Markdown id="progress-bar-color-docs" src={ProgressBarColorDocs} />,
        example: <ProgressBarColor />,
        source: ProgressBarColorSrc,
      },
      {
        title: 'Foreground and Background Color',
        description: <Markdown id="progress-bar-two-colors-docs" src={ProgressBarTwoColorsDocs} />,
        example: <ProgressBarTwoColors />,
        source: ProgressBarTwoColorsSrc,
      },
      {
        title: 'Customized',
        description: <Markdown id="progress-bar-customized-colors-docs" src={ProgressBarCustomizedColorsDocs} />,
        example: <ProgressBarCustomizedColors />,
        source: ProgressBarCustomizedColorsSrc,
      },
    ]}
    propsTablesMarkdown={[PropsTable]}
  />
);

export default DocPage;
