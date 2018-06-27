import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import CollapsibleMenuViewSrc from '!raw-loader!../../../../src/CollapsibleMenuView';
import CollapsibleMenuViewItemSrc from '!raw-loader!../../../../src/CollapsibleMenuViewItem';
import CollapsibleMenuViewItemGroupSrc from '!raw-loader!../../../../src/CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewToggleSrc from '!raw-loader!../../../../src/CollapsibleMenuViewToggle';

// Example Files
import BasicView from '../example/CollapsibleMenuViewDemo';
import BasicViewSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CollapsibleMenuViewDemo';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'CollapsibleMenuView Example',
        example: <BasicView />,
        source: BasicViewSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'CollapsibleMenuView',
        componentSrc: CollapsibleMenuViewSrc,
      },
      {
        componentName: 'CollapsibleMenuView.Item',
        componentSrc: CollapsibleMenuViewItemSrc,
      },
      {
        componentName: 'CollapsibleMenuView.ItemGroup',
        componentSrc: CollapsibleMenuViewItemGroupSrc,
      },
      {
        componentName: 'CollapsibleMenuView.Toggle',
        componentSrc: CollapsibleMenuViewToggleSrc,
      },
    ]}
  />
);

export default DocPage;
