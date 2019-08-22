# Terra TableCellGrid - Implementing a Single Select TableCellGrid

The terra-table-cell-grid implementation requires controlled state if selections are required. As a result selections are applied at child cell grid generation from HOC state. The following guide show you how to implement that state within a single cell grid selection variant of table.

## State Management
The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC.

 First defaulting our state to a null value with the useState hook.
```diff
+ const [selectedKey, setSelectedKey] = useState([]);
```
Next creating an event handler callback method to pass to the table cell grid's "onSelect" prop. The "onSelect" will return the metaData prop passed it each cell grid.
```diff
+  const handleCellGridSelection = (event, metaData) => {

+  };
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```diff
  const handleCellGridSelection = (event, metaData) => {
+   event.preventDefault();
  };
```
A single select table normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state.
```diff
  const handleCellGridSelection = (event, metaData) => {
    event.preventDefault();
+   if (selectedKey !== metaData.key) {
+     setSelectedKey(metaData.key);
+   }
  };
```
Setting state will trigger another render. So in the render method we need generate our table cell grids with the updated isSelected and isSelectable props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.
[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)
```diff
+  const createCellGrid = (cellGridData) => (
+    return (
+      <CellGrid
+        key={cellGridData.key}
+      >
+        {createCellsForCellGrid(cellGridData.cells)}
+      </CellGrid>
+    );
+  };
```
Next we need to set up our metaData object with our key value, and attach the "onSelect" to our handler.
```diff
  const createCellGrid = (cellGridData) => (
    return (
      <CellGrid
        key={itemData.key}
+       metaData={{ key: itemData.key }}
+       onSelect={handleCellGridSelection}
      >
        {createCellsForCellGrid(cellGridData.cells)}
      </CellGrid>
    );
  };
```
For the single select table we set "isSelectable" for all items.
```diff
  const createCellGrid = (cellGridData) => (
    return (
      <CellGrid
        key={cellGridData.key}
+       isSelectable
        metaData={{ key: cellGridData.key }}
        onSelect={handleCellGridSelection}
      >
        {createCellsForCellGrid(cellGridData.cells)}
      </CellGrid>
    );
  };
```
Next we need to check if the item matches the selectedKey in state.
```diff
  const createCellGrid = (cellGridData) => (
    return (
      <CellGrid
        key={cellGridData.key}
        isSelectable
+       isSelected={selectedKey === cellGridData.key}
        metaData={{ key: cellGridData.key }}
        onSelect={handleCellGridSelection}
      >
        {createCellsForCellGrid(cellGridData.cells)}
      </CellGrid>
    );
  };
```
We can then implement the unpack of our data into our cell grid cells.
```diff
+ const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

+ const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));
```
Finally we can implement a method to loop through our data and create the table cell grid with our methods and call it from our render method.
```diff
+  const createCellGrids = data => data.map(childItem => createCellGrid(childItem));

   render() {
     return (
+      <TableCellGrid
+        paddingStyle="standard"
+        headerCellGrid={(
+          <HeaderCellGrid>
+            <HeaderCell isPadded>Column 0</HeaderCell>
+            <HeaderCell isPadded>Column 1</HeaderCell>
+            <HeaderCell isPadded>Column 2</HeaderCell>
+          </HeaderCellGrid>
+        )}
+      >
+        {createCellGrids(mockData)}
+      </TableCellGrid>
     );
   }
```
Using these steps we get the following example:
