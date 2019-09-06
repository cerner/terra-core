# Terra Table - Implementing a CheckMark Table

The terra-table implementation requires controlled state if selections are required. As a result selections are applied at child row generation from HOC state. The following guide show you how to implement that state within a multiple row selection variant of table, as well as implement the additional narrowing requirements of a max selection for rows.

## State Management
The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be using a unique key to manage the selection state, but the type of state used is open to the implementor of the HOC.

 First defaulting our state to an empty array in the constructor. 
```diff
+ const [selectedKeys, setSelectedKeys] = useState([]);
+ const [headerState, setHeaderState] = useState('none');
```
Next creating an event handler callback method to pass to the table rpow's `onSelect` prop. The `onSelect` will return the metaData prop passed it each table row.
```diff
+  const handleRowSelection = (event, metaData) => {
+
+  }
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```diff
  const handleRowSelection = (event, metaData) => {
+   event.preventDefault();
+   event.stopPropagation();
  }
```
Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has selected or unselected the table row key in our state. So we use the utility method `updatedMultiSelectedKeys`, which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state.
```diff
  const handleRowSelection = (event, metaData) => {
    event.preventDefault();
    event.stopPropagation();
  
+   const newSelection = Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key);
+   if (newSelection.length === rowCount) {
+     setHeaderState('all');
+   } else if (newSelection.length > 0) {
+     setHeaderState('intermediate');
+   } else {
+     setHeaderState('none');
+   }
+   setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  }
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
+       metaData={{ key: rowData.key }}
+       onSelect={handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
For multi-select tables we need to set selectability based upon whether or not we have reached our max selection count.  Terra Table provides a helper for this, namely `shouldBeMultiSelectable`, by providing our count, the currently selected key, and the key of the associated item.
```diff
  const createRow = (rowData) => {
    return (
      <Row
        key={rowData.key}
+       isSelectable
        metaData={{ key: rowData.key }}
        onSelect={handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
Next we need to check if the row is selected. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array.
```diff
  const createRow = (rowData) => {
    return (
      <Row
        key={rowData.key}
        isSelectable
+       isSelected={headerState === 'none' ? false : headerState === 'all' || selectedKeys.indexOf(rowData.key) >= 0}
        metaData={{ key: rowData.key }}
        onSelect={this.handleRowSelection}
      >
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
Finally we need to add an entry to the headerRow for the check mark cell.
```diff
  return (
    <Table
      paddingStyle="standard"
      headerRow={(
        <HeaderRow>
+         <HeaderCheckMarkCell
+           isSelected={headerState !== 'none'}
+           isIntermediate={headerState === 'intermediate'}
+           onSelect={handleHeaderMarkSelection}
+           isPadded
+           isSelectable
+           key="derp"
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
