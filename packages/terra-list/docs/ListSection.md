# List Section

The list section component provides the ability to display section headers and collapse a section within a logical group. The list section will render as a flat list.

The section should not be used within a virtualized component, such as the infinite list, as it will not work. If a section style of display is desired, simply consume the ListSectionHeader directly.

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
    <p>blurb</p>
  </Item>
  <Item key="section-1-item-2">
    <p>blurb</p>
  </Item>
</Section>


```
