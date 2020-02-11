# List Subsection

The list subsection component creates a subsection header and layouts it out with the passed child list items. The subsection provides the ability to display and collapse a subsection within a logical group. The list subsection will render as a flat list.Both `isSelectable=true` and `isDisabled=true` should be set for a non-selectable item in a list containing a combination of both selectable and non-selectable items to prevent any accessibility issues. Use `role=listbox` if section has selectable items and no parent `List` element. Use `role=option` if section has selectable items and parent `List` element with `role=listbox`.


## Usage

```jsx
import React from 'react';
import List, { Item, Subsection } from 'terra-list/lib/List';

<Subsection
  isCollapsible
  isCollapsed={false}
  title="test title"
  metaData={{ key: 'section-1' }}
  onSelect={this.handleSelection}
  key="section-1"
>
  <Item key="section-1-item-1">
    <p>List item text</p>
  </Item>
  <Item key="section-1-item-2">
    <p>List item text</p>
  </Item>
</Subsection>


```
