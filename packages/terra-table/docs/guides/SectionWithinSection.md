# Terra Table - Sections with Subsections

With the inclusion of sections in the table, there are two recommended patterns for created nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a table, but not both.

## State Management
As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern.

First defaulting our state to an empty array with the useState hook.
```diff
+  const [collapsedKeys, setCollapsedKeys] = useState([]);
```
Next creating an event handler callback method to pass to the section's "onSelect" prop. The "onSelect" callback will return the metaData prop passed to each section.
```diff
+  const handleSectionSelection = (event, metaData) => {
+
+  };
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```diff
  const handleSectionSelection = (event, metaData) => {
+   event.preventDefault();
  };
```
Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method `updatedMultiSelectedKeys`, which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state.
```diff
  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
+   setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };
```
Setting state will trigger another render. So in the render method we need to generate our sections with the updated `isCollapsed` and `isCollapsible` props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if items are placed within sections structurally.
[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)
```diff
+ const createSection = (sectionData) => {
+   return (
+     <Section
+       key={sectionData.key}
+       title={sectionData.title}
+     >
+       {sectionData.childItems.map(childItem => createSubsection(childItem))}
+     </Section>
+   );
+ };
```
Next we need to set up our metaData object with our key value, and attach the `onSelect` to our handler.
```diff
  const createSection = (sectionData) => {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
+       metaData={{ key: sectionData.key }}
+       onSelect={handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  };
```
For rendering the collapsible section we set `isCollapsible` for all sections.
```diff
  const createSection = (sectionData) => {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
+       isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  };
```
Following `isCollapsible` we need to check if the section is `isCollapsed` state. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array.
```diff
  const createSection = (sectionData) => {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
+       isCollapsed={collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  };
```
After creating our section, we then implement our subsection.
```diff
+ const createSubsection = subsectionData => {
+   return (
+     <Subsection
+       key={subsectionData.key}
+       title={subsectionData.title}
+     >
+       {subsectionData.childItems.map(childItem => createRow(childItem))}
+     </Subsection>
+   );
+ };
```
Now we need an entry for a row to unpack our cells into.
```diff
+ const createRow = (rowData) => {
+   return (
+     <Row
+       key={rowData.key}
+     >
+       {createCellsForRow(rowData.cells)}
+     </Row>
+   );
+ };
```
We can then implement the unpack of our data into our row cells.
```diff
+ const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

+ const createCellsForRow = cells => cells.map(cell => createCell(cell));

+ const createRow = rowData => <Row key={rowData.key}>{createCellsForRow(rowData.cells)}</Row>;
```
Then we can implement a method to loop through our data and create the section with our methods and call it from our render method.
```diff
+  const sections = mockData.map(section => createSection(section));

  return (
+   <Table
+     paddingStyle="standard"
+     headerRow={(
+       <HeaderRow>
+         <HeaderCell isPadded>Column 0</HeaderCell>
+         <HeaderCell isPadded>Column 1</HeaderCell>
+         <HeaderCell isPadded>Column 2</HeaderCell>
+        </HeaderRow>
+      )}
+    >
+      {sections}
+    </Table>
  );
```
Finally we need to address the accessibility concerns of collapsible section row. In order to display to the user that a specific number of rows are being hidden, we need to set the index of each element (row, section, table, etc) and add the total row count to the Table.

This step is only necessarily if you are using collapsible sections, if you are using section with `isCollapsible={false}` no indexes are needed as they are implied.
```diff
  const [collapsedKeys, setCollapsedKeys] = useState([]);
+ let rowCount = 1;
...
  const createRow = (rowData) => {
+   rowCount += 1;
    return (
      <Row
        key={rowData.key}
+       aria-rowindex={rowCount}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  };
...
  const createSubsection = subsectionData => {
+   rowCount += 1;
    return (
      <Subsection
        key={subsectionData.key}
+       aria-rowindex={rowCount}
        title={subsectionData.title}
      >
        {subsectionData.childItems.map(childItem => createRow(childItem))}
      </Subsection>
    );
  };
...
  const createSection = (sectionData) => {
+   rowCount += 1;
    return (
      <Section
        key={sectionData.key}
+       aria-rowindex={rowCount}
        title={sectionData.title}
        isCollapsed={collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  };
...
  return (
    <Table
+     aria-rowcount={rowCount}
      paddingStyle="standard"
      headerRow={(
-       <HeaderRow>
+       <HeaderRow aria-rowindex="1">
          <HeaderCell isPadded>Column 0</HeaderCell>
          <HeaderCell isPadded>Column 1</HeaderCell>
          <HeaderCell isPadded>Column 2</HeaderCell>
        </HeaderRow>
      )}
    >
      {createSections(mockData)}
    </Table>
  );
```
Using these steps we get the following example:
