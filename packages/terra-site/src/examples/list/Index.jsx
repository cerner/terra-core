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
import SingleSelectWithPreSelectedItem from './SingleSelectWithPreSelectedItem';
import SingleSelectWithNonSelectableItem from './SingleSelectWithNonSelectableItem';
import MultiSelect from './MultiSelect';
import MultiSelectWithPreSelectedItem from './MultiSelectWithPreSelectedItem';
import MultiSelectWithNonSelectableItem from './MultiSelectWithNonSelectableItem';
import MultiSelectWithNoItemDeselect from './MultiSelectWithNoItemDeselect';
import MultiSelectMaxSelection from './MultiSelectMaxSelection';

const ListExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>List Item</h2>
    <PropsTable id="props-listItem" src={ListItemSrc} />
    <h2>List</h2>
    <PropsTable id="props-list" src={ListSrc} />
    <h2>Single Select List</h2>
    <PropsTable id="props-singleList" src={SingleSelectListSrc} />
    <h2>Multiple Select List</h2>
    <PropsTable id="props-multiList" src={MultiSelectListSrc} />
    <h2 id="list">List</h2>
    <ListDemo />
    <br />
    <h2 id="single">Single Select List</h2>
    <SingleSelect />
    <br />
    <h2 id="single-pre-selected">Single Select List With Preselected Item</h2>
    <SingleSelectWithPreSelectedItem />
    <br />
    <h2 id="single-non-selectable">Single Select List With Item 3 Non-Selectable</h2>
    <SingleSelectWithNonSelectableItem />
    <br />
    <h2 id="multi">Multi Select List</h2>
    <MultiSelect />
    <br />
    <h2 id="multi-pre-selected">Multi Select List With Preselected Item</h2>
    <MultiSelectWithPreSelectedItem />
    <br />
    <h2 id="multi-non-selectable">Multi Select List With Item 3 Non-Selectable</h2>
    <MultiSelectWithNonSelectableItem />
    <br />
    <h2 id="multi-no-deselect">Multi Select List With Item 1 and 2 Selected but Cannot Deselect</h2>
    <MultiSelectWithNoItemDeselect />
    <br /><h2 id="multi-max-selection">Multi Select List With Maximum Selection of 2 Items</h2>
    <MultiSelectMaxSelection />
  </div>
);

export default ListExamples;
