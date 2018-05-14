/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-collapsible-menu-view/docs/README.md';
import { name } from 'terra-collapsible-menu-view/package.json';

// Component Source
import CollapsibleMenuViewSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuView';
import CollapsibleMenuViewItemSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuViewItem';
import CollapsibleMenuViewItemGroupSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewToggleSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuViewToggle';

// Example Files
import BasicView from './CollapsibleMenuViewDemo';
import BasicViewSrc from '!raw-loader!./CollapsibleMenuViewDemo';

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
