# List Subsection

The list subsection component provides the ability to display subsection headers and collapse a subsection within a logical group. The list subsection will render as a flat list.

The subsection should not be used within a virtualized component, such as the infinite list, as it will not work. If a subsection style of display is desired, simply consume the ListSubsectionHeader directly.

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
    <p>blurb</p>
  </Item>
  <Item key="section-1-item-2">
    <p>blurb</p>
  </Item>
</Subsection>


```
