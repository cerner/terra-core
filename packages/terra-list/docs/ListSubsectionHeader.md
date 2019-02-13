# List Subsection Header

The list subsection header is a sub-component of the list subsection. It provides the visual representation of the subsection, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator. The subsection header should only be consumed directly when the header is static, as the actual list item collapse is handled by the subsection.

When consumed by itself as an individual list item avoid enabling the collapsible properties.

## Usage

```jsx
import React from 'react';
import List, { SubsectionHeader } from 'terra-list/lib/List';

<SubsectionHeader
  title="test title"
  key="subsection-1"
/>

```
