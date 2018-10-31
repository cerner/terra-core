# List Section Header

The list section header is a sub-component of the list section. It provides the visual representation of the section, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator.

When consumed by itself as an individual list item avoid enabling the collapsible properties.

## Usage

```jsx
import React from 'react';
import List, { SectionHeader } from 'terra-list/lib/List';

<SectionHeader
  title="test title"
  key="section-1"
/>

```
