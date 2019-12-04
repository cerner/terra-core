# List Item

The list item provides a pattern for selection/selectability for li surrounded child content. Whenever, the list item has a prop `isSelectable=true` then `aria-label` must be provided to List for accessibility.  The onSelect event is the primary means for interaction, as it yields the associated metaData when valid selection occurs, though individual onClick and onKeyDown events can be applied through the use of customProps if greater granularity is required. Both `isSelectable=true` and `isDisabled=true` should be set for a non-selectable item in a list containing a combination of both selectable and non-selectable items, to prevent any accessibility issues.

## Usage

```jsx
import React from 'react';
import List, { Item } from 'terra-list/lib/List';

<Item
  key={itemData.key}
  isSelectable
  isSelected={false}
  metaData={{ key: 'my-item-key' }}
  onSelect={this.handleItemSelection}
>
  <p>List item text</p>
</Item>


```
