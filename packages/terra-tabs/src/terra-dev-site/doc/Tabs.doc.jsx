/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

// Component Source
import TabsSrc from '!raw-loader!../../../src/Tabs';
import PaneSrc from '!raw-loader!../../../src/TabPane';

// Example Files
import TabsTemplate from './example/TabsTemplate';
import TabsTemplateSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/TabsTemplate';
import TabsWithFilledContent from './example/TabsWithFilledContent';
import TabsWithFilledContentSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/TabsWithFilledContent';
import IconOnlyTabs from './example/IconOnlyTabs';
import IconOnlyTabsSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/IconOnlyTabs';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Compact',
        example: <TabsTemplate />,
        source: TabsTemplateSrc,
      },
      {
        title: 'Expanded',
        example: <TabsTemplate tabFill />,
        source: TabsTemplateSrc,
      },
      {
        title: 'Icon Only',
        example: <IconOnlyTabs />,
        source: IconOnlyTabsSrc,
      },
      {
        title: 'Fill Parent Container',
        example: <TabsWithFilledContent fill />,
        source: TabsWithFilledContentSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Tabs',
        componentSrc: TabsSrc,
      },
      {
        componentName: 'Tabs.Pane',
        componentSrc: PaneSrc,
      },
    ]}
  />
);

export default DocPage;
