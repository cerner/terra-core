# Single Select List with Sections

The Terra Single Select List with Sections is a structural component to arrange list of items within sections with a single, selectable item across multiple sections.

## Usage

```jsx
import React from 'react';
import SingleSelectList from 'terra-list/lib/SingleSelectList';

const SingleSelectSections = () => (
  <SingleSelectList hasSections isDivided hasChevrons={false}>
    <SingleSelectList.Section
      headerContent="Header 1"
      listItems={[
        <SingleSelectList.Item isSelectable content={<p>test1</p>} key="123" />,
        <SingleSelectList.Item isSelectable content={<p>test2</p>} key="124" />,
        <SingleSelectList.Item isSelectable content={<p>test3</p>} key="125" />,
      ]}
    />
    <SingleSelectList.Section
      headerContent="Header 2"
      listItems={[
        <SingleSelectList.Item isSelectable content={<p>test1</p>} key="126" />,
        <SingleSelectList.Item isSelectable content={<p>test2</p>} key="127" />,
        <SingleSelectList.Item isSelectable content={<p>test3</p>} key="128" />,
      ]}
    />
  </SingleSelectList>
);
```
