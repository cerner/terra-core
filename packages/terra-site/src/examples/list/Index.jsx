/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-list/docs/README.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ListItemSrc from '!raw-loader!terra-list/src/ListItem.jsx';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ListSrc from '!raw-loader!terra-list/src/List.jsx';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SingleSelectListSrc from '!raw-loader!terra-list/src/SingleSelectList.jsx';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MultiSelectListSrc from '!raw-loader!terra-list/src/MultiSelectList.jsx';

// Example Files
import ListDemo from './ListDemo';
import SingleSelectListDemo from './SingleSelectListDemo';
import MultiSelectListDemo from './MultiSelectListDemo';

const ListExamples = () => (
  <div>
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
