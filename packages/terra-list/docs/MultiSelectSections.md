# Multi Select List with sections

The Terra Multi Select List which has sections is a structural component to arrange list of items within sections with a configurable number of selectable items across sections.

## Usage

```jsx
const MultiSelectSections = () => (
  <MultiSelectList hasSections>
    <MultiSelectList.Section
      headerContent="Header 1"
      listItems={[
        <MultiSelectList.Item isSelectable content={<p>test1</p>} key="123" />,
        <MultiSelectList.Item isSelectable content={<p>test2</p>} key="124" />,
        <MultiSelectList.Item isSelectable content={<p>test3</p>} key="125" />,
      ]}
    />
    <MultiSelectList.Section
      headerContent="Header 2"
      listItems={[
        <MultiSelectList.Item isSelectable content={<p>test1</p>} key="126" />,
        <MultiSelectList.Item isSelectable content={<p>test2</p>} key="127" />,
        <MultiSelectList.Item isSelectable content={<p>test3</p>} key="128" />,
      ]}
    />
  </MultiSelectList>
)
```
