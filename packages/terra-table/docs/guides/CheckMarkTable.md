# Terra Table - Implementing a CheckMark Table

The terra-table implementation requires controlled state if selections are required. As a result selections are applied at child row generation from HOC state. The following guide show you how to implement that state within a multiple row selection variant of table, as well as implement the additional narrowing requirements of a max selection for rows.

## State Management
The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be using a unique key to manage the selection state, but the type of state used is open to the implementor of the HOC. The `selectedKeys` will keep track of the keys that are active given the allSelected state. In the case where `allSelected` is "false" the key values will be the keys that are selected, and in the case of "true" it will be the keys that are not selected. This dual behavior removes the need to copy all keys into state when the "select all" in checked.

 First defaulting our state to an empty array in the constructor. Then 
```diff
+ const [selectedKeys, setSelectedKeys] = useState([]);
+ const [allSelected, setAllSelected] = useState(false);
```
Next creating an event handler callback method to pass to the table row check mark cell's `onSelect` prop. The `onSelect` will return the metaData prop passed it each check mark cell.
```diff
+  const handleMarkSelection = (event, metaData) => {
+
+  }
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```diff
  const handleMarkSelection = (event, metaData) => {
+   event.preventDefault();
+   event.stopPropagation();
  }
```
Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has selected or unselected the table row key in our state. So we use the utility method `updatedMultiSelectedKeys`, which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state. Comparing the length of the array returned to the number of selectable rows within your table we can determine if all values are selected. If all values are selected we reset the keys, as there are no exceptions to check for.
```diff
  const handleMarkSelection = (event, metaData) => {
    event.preventDefault();
    event.stopPropagation();
  
+   const newSelection = Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key);
+   const isMax = newSelection.length === rowCount;
+   setAllSelected(allSelected ? !isMax : isMax);
+   setSelectedKeys(isMax ? [] : newSelection);
  }
```
Next in our implementation we'll want to add the ability to select all checkmark values. If keys are present there is an intermediate state. In the case of the intermediate state select all values. If `allSelected` is true then set to false. In either case we will be setting to all or nothing selected, so the intermediate values will be reset to an empty array.
```diff
+ const handleHeaderMarkSelection = () => {
+   setAllSelected(selectedKeys.length || !allSelected);
+   setSelectedKeys([]);
+ };
```
Before we create our method to populate our row with check mark state, we want to create a method to retrieve a selected value based upon a key and our dual state.
```diff
+ const getIsRowSelected = (key) => {
+   if (selectedKeys.length) {
+     const isPresent = selectedKeys.indexOf(key) >= 0;
+     return allSelected ? !isPresent : isPresent;
+   }
+   return allSelected;
+ };
```
Setting state will trigger another render. So in the render method we need generate our table rows with the updated isSelected and `isSelectable` props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.
[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)
```diff
+  const createRow = (rowData) => {
+    return (
+      <Row
+        key={rowData.key}
+      >
+        {createCellsForRow(rowData.cells)}
+      </Row>
+    );
+  }
```
Next we need to set up our metaData object with our key value, and attach the "onSelect" to our handler.
```diff
  const createRow = (rowData) => {
    return (
      <Row
        key={rowData.key}
      >
+       <CheckMarkCell
+         isPadded
+         metaData={{ key: rowData.key }}
+         onSelect={handleMarkSelection}
+       />
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
For multi-select tables we need to set selectability based upon whether or not we have reached our max selection count.  In the case of a table that doesn't have a maximum selection set all rows will be `isSelectable`.
```diff
  const createRow = (rowData) => {
    return (
      <Row
        key={rowData.key}
      >
        <CheckMarkCell
          isPadded
+         isSelectable
          metaData={{ key: rowData.key }}
          onSelect={handleMarkSelection}
        />
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
Now pass the key from the rowData to our `getIsRowSelected` method.
```diff
  const createRow = (rowData) => {
    return (
      <Row
        key={rowData.key}
      >
        <CheckMarkCell
          isPadded
          isSelectable
+         isSelected={getIsRowSelected(rowData.key)}
          metaData={{ key: rowData.key }}
          onSelect={handleMarkSelection}
        />
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
We can then implement the unpack of our data into our row cells.
```diff
+  const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

+  const createCellsForRow = cells => cells.map(cell => createCell(cell));
```
Next can implement a method to loop through our data and create the table with our methods and call it from our render method.
```diff
+  const createRows = data => data.map(childItem => createRow(childItem));

+ return (
+   <Table
+     paddingStyle="standard"
+     headerRow={(
+       <HeaderRow>
+         <HeaderCell isPadded key="cell-0">Column 0</HeaderCell>
+         <HeaderCell isPadded key="cell-1">Column 1</HeaderCell>
+         <HeaderCell isPadded key="cell-2">Column 2</HeaderCell>
+         <HeaderCell isPadded key="cell-3">Column 3</HeaderCell>
+       </HeaderRow>
+     )}
+   >
+     {createRows(mockData)}
+   </Table>
+ );
```
Finally we need to add an entry to the headerRow for the check mark cell. The `isSelected` prop will be in either the case of `allSelected` or in the presence of `selectedKeys`. The intermediate variant will be implemented only the case of `selectedKeys`.
```diff
  return (
    <Table
      paddingStyle="standard"
      headerRow={(
        <HeaderRow>
+         <HeaderCheckMarkCell
+           isSelected={allSelected || selectedKeys.length}
+           isIntermediate={selectedKeys.length}
+           onSelect={handleHeaderMarkSelection}
+           isPadded
+           isSelectable
+           key="header-check-cell"
+         />
          <HeaderCell isPadded key="cell-0">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-1">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 2</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 3</HeaderCell>
        </HeaderRow>
      )}
    >
      {createRows(mockData)}
    </Table>
  );
```
Using these steps we get the following example:
