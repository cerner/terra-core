# List Section

The list section component creates a section header and layouts it out with the passed child list items. The section provides the ability to display and collapse a section within a logical group. The list section will render as a flat list.

## Usage

```jsx
import React from 'react';
import List, { Item, Section } from 'terra-list/lib/List';

<Section
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
</Section>


```
