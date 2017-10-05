import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-list/docs/README.md';
import { version } from 'terra-list/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ListItemSrc from '!raw-loader!terra-list/src/ListItem.jsx';
import ListSrc from '!raw-loader!terra-list/src/List.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example File
import ListExample from './examples/List';

const ListExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-listItem" src={ListItemSrc} componentName="List Item" />
    <PropsTable id="props-list" src={ListSrc} componentName="List" />
    <h2>Example</h2>
    <ListExample />
  </div>
);

export default ListExamples;
