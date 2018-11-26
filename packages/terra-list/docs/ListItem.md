# List Item

The list item provides a pattern for selection/selectability for li surrounded child content. The onSelect event is the primary means for interaction, as it yeilds the associated metaData when valid selection occurs, though individual onClick and onKeyDown events can be applied through the use of customProps if greated granularity is required.

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
