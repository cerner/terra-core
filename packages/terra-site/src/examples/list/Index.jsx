import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-list/docs/README.md';
import { version } from 'terra-list/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ListItemSrc from '!raw-loader!terra-list/src/ListItem.jsx';
import ListSrc from '!raw-loader!terra-list/src/List.jsx';
import SingleSelectListSrc from '!raw-loader!terra-list/src/SingleSelectList.jsx';
import MultiSelectListSrc from '!raw-loader!terra-list/src/MultiSelectList.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ListDemo from './ListDemo';
import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
import MultiSelectMaxSelection from './MultiSelectMaxSelection';

const ListExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-listItem" src={ListItemSrc} componentName="List Item" />
    <PropsTable id="props-list" src={ListSrc} componentName="List" />
    <PropsTable id="props-singleList" src={SingleSelectListSrc} componentName="Single Select List" />
    <PropsTable id="props-multiList" src={MultiSelectListSrc} componentName="Multiple Select List" />
    <br />
    <h1>Examples</h1>
    <h2 id="list">List</h2>
    <ListDemo />
    <br />
    <h2 id="single">Single Select List</h2>
    <SingleSelect />
    <br />
    <h2 id="multi">Multi Select List</h2>
    <MultiSelect />
    <br />
    <h2 id="multi-max-selection">Multi Select List - Maximum Selection of 2 Items</h2>
    <MultiSelectMaxSelection />
  </div>
);

export default ListExamples;
