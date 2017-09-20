/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import Heading from 'terra-heading';
import ReadMe from 'terra-collapsible-menu-view/docs/README.md';
import { version } from 'terra-collapsible-menu-view/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import CollapsibleMenuViewSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuView';
import CollapsibleMenuViewItemSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuViewItem';
import CollapsibleMenuViewItemGroupSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewToggleSrc from '!raw-loader!terra-collapsible-menu-view/src/CollapsibleMenuViewToggle';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import BasicView from './CollapsibleMenuViewDemo';

const CollapsibleMenuViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="collapsible-menu-view-props" src={CollapsibleMenuViewSrc} componentName="CollapsibleMenuView" />
    <PropsTable id="item-props" src={CollapsibleMenuViewItemSrc} componentName="CollapsibleMenuView.Item" />
    <PropsTable id="item-group-props" src={CollapsibleMenuViewItemGroupSrc} componentName="CollapsibleMenuView.ItemGroup" />
    <PropsTable id="toggle-props" src={CollapsibleMenuViewToggleSrc} componentName="CollapsibleMenuView.Toggle" />
    <Heading level={2} size="large">CollapsibleMenuView.Divider Props</Heading>
    <p>
    The divider is a purely visual element with no props available.
    This component should be used to indicate where a divider should be placed between items.
    </p>
    <br />
    <br />
    <Heading level={3} size="medium">CollapsibleMenuView Example</Heading>
    <br />
    <BasicView />
    <br />
    <br />
  </div>
);

export default CollapsibleMenuViewExamples;
