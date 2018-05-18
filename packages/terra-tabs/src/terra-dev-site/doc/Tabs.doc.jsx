/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-tabs/docs/README.md';
import { name } from 'terra-tabs/package.json';

// Component Source
import TabsSrc from '!raw-loader!terra-tabs/src/Tabs';
import PaneSrc from '!raw-loader!terra-tabs/src/TabPane';

// Example Files
import TabsTemplate from './examples/TabsTemplate';
import TabsTemplateSrc from '!raw-loader!./examples/TabsTemplate';
import TabsWithFilledContent from './examples/TabsWithFilledContent';
import TabsWithFilledContentSrc from '!raw-loader!./examples/TabsWithFilledContent';
import IconOnlyTabs from './examples/IconOnlyTabs';
import IconOnlyTabsSrc from '!raw-loader!./examples/IconOnlyTabs';

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
