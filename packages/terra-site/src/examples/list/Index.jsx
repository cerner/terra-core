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
import ListDemo from './components/List';
import SingleSelect from './components/SingleSelect';
import MultiSelect from './components/MultiSelect';
import MultiSelectMaxSelection from './components/MultiSelectMaxSelection';

const ListExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-listItem" src={ListItemSrc} componentName="List Item" />
    <PropsTable id="props-list" src={ListSrc} componentName="List" />
    <PropsTable id="props-singleList" src={SingleSelectListSrc} componentName="Single Select List" />
    <PropsTable id="props-multiList" src={MultiSelectListSrc} componentName="Multiple Select List" />
  </div>
);

export default ListExamples;
