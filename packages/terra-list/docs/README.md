# Terra List Documentation

The Terra List is a structural component to arrange content within list/listitems.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-list`
  - `yarn add terra-list`

## Usage

```jsx
import React from 'react';
import List from 'terra-list';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import MultiSelectList from 'terra-list/lib/MultiSelectList';

<List.Item
  content={[<h1 blurb />}
  isSelected={true}
  isSelectable={true}
  hasChevron={false}
/>

<List isDivided={true}>
  <List.Item content={[<h1 blurb />} />
  <List.Item content={[<h1 blurb />} />
</List>

<SingleSelectList isDivided={true} hasChevrons={false}>
  <SingleSelectList.Item content={[<h1 blurb />} />
  <SingleSelectList.Item content={[<h1 blurb />} />
</SingleSelectList>

<MultiSelectList isDivided={true} maxSelectionCount={3}>
  <MultiSelectList.Item content={[<h1 blurb />} />
  <MultiSelectList.Item content={[<h1 blurb />} />
</MultiSelectList>

```
## React Props

The *ListItem* React component will have the following API:
||Prop||Type||Description||
|`content`|Element|A react element.|
|`isSelected`|Bool|The indicator if the item is selected.|
|`itemSelectable`|Bool|The indicator if selection styles should be applied to list item.|
|`hasChevron`|Bool|The indicator if a chevron should be displayed on the item.|

The *List* React component will have the following API:
||Prop||Type||Description||
|`isDivided`|Bool|The indicator if a border style should be applied to child items.|

The *SingleSelectList* React component will have the following API:
||Prop||Type||Description||
|`isDivided`|Bool|The indicator if a border style should be applied to child items.|
|`hasChevrons`|Bool|The indicator if a chevron should be displayed on selectable items.|
|`onChange`|Function|Common callback containing the event and index of selection.|

The *MultiSelectList* React component will have the following API:
||Prop||Type||Description||
|`isDivided`|Bool|The indicator if a border style should be applied to child items.|
|`maxSelectionCount`|Number|The maximum number of selected items.|
|`onChange`|Function|Common callback containing the event and index of selection.|
