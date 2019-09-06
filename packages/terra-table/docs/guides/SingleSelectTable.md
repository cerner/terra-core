# Terra Table - Implementing a Single Select Table

The terra-table implementation requires controlled state if selections are required. As a result selections are applied at child row generation from HOC state. The following guide show you how to implement that state within a single row selection variant of table.

## State Management
The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC.

 First defaulting our state to a null value with the useState hook.
```diff
+ const [selectedKey, setSelectedKey] = useState([]);
```
Next creating an event handler callback method to pass to the table row's "onSelect" prop. The "onSelect" will return the metaData prop passed it each row.
```diff
+  const handleRowSelection = (event, metaData) => {

+  };
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```diff
  const handleRowSelection = (event, metaData) => {
+   event.preventDefault();
  };
```
A single select table normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state.
```diff
  const handleRowSelection = (event, metaData) => {
    event.preventDefault();
+   if (selectedKey !== metaData.key) {
+     setSelectedKey(metaData.key);
+   }
  };
```
Setting state will trigger another render. So in the render method we need generate our table rows with the updated isSelected and isSelectable props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.
[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)
```diff
+  const createRow = (rowData) => (
+    return (
+      <Row
+        key={rowData.key}
+      >
+        {createCellsForRow(rowData.cells)}
+      </Row>
+    );
+  };
```
Next we need to set up our metaData object with our key value, and attach the "onSelect" to our handler.
```diff
  const createRow = (rowData) => (
    return (
      <Row
        key={rowData.key}
+       metaData={{ key: rowData.key }}
+       onSelect={handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  };
```
For the single select table we set "isSelectable" for all items.
```diff
  const createRow = (rowData) => (
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
  };
```
Next we need to check if the item matches the selectedKey in state.
```diff
  const createRow = (rowData) => (
    return (
      <Row
        key={rowData.key}
        isSelectable
+       isSelected={selectedKey === rowData.key}
        metaData={{ key: rowData.key }}
        onSelect={handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  };
```
We can then implement the unpack of our data into our row cells.
```diff
+ const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

+ const createCellsForRow = cells => cells.map(cell => createCell(cell));
```
Finally we can implement a method to loop through our data and create the table with our methods and call it from our render method.
```diff
+  const createRows = data => data.map(childItem => createRow(childItem));

   render() {
     return (
+      <Table
+        paddingStyle="standard"
+        headerRow={(
+          <HeaderRow>
+            <HeaderCell isPadded>Column 0</HeaderCell>
+            <HeaderCell isPadded>Column 1</HeaderCell>
+            <HeaderCell isPadded>Column 2</HeaderCell>
+          </HeaderRow>
+        )}
+      >
+        {createRows(mockData)}
+      </Table>
     );
   }
```
Using these steps we get the following example:
