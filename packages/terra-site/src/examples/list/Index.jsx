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
import SingleSelectListDemo from './SingleSelectListDemo';
import MultiSelectListDemo from './MultiSelectListDemo';

const ListExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-listItem" src={ListItemSrc} />
    <PropsTable id="props-list" src={ListSrc} />
    <PropsTable id="props-singleList" src={SingleSelectListSrc} />
    <PropsTable id="props-multiList" src={MultiSelectListSrc} />
    <h2 id="list">List</h2>
    <ListDemo />
    <h2 id="single">Single Select List</h2>
    <SingleSelectListDemo />
    <h2 id="multi">Multi Select List</h2>
    <MultiSelectListDemo />
  </div>
);

export default ListExamples;
