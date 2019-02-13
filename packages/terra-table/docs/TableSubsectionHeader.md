# Terra Table Subsection Header

The Terra Subsection Header is built upon a table row and can be placed similarly within a table, provided the number of columns are provided to the SubsectionHeader. The subsection header should only be placed within the table via children when the header is static, as the actual row collapse is handled by the section.

## Usage

```jsx
import React from 'react';
import { SubsectionHeader } from 'terra-table';

<SubsectionHeader
  key="unique-react-key"
  title="Subsection Title"
  colSpan={3}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
