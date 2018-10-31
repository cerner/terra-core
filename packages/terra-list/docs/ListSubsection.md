# List Subsection

The list subsection component, similiar to the list section, provides the ability to display subsection headers and collapse a subsection within a logical group. Through the use of React fragments the end result of the render method is still a flat list. With a flat list we are able to address many accessibility concerns associated with nested list elements.

The subsection should not be used within a virtualized component, such as the infinite list, as the react fragment causes calculation issues. If a subsection display is desired, the ListSubsectionHeader should be consumed directly.

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
