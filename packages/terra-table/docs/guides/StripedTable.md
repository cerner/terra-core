# Terra Table - Implementing a Striped Table

With the table the striping pattern for the implementation is responsibility of striping is on the Row itself. The following guide shows how to cleanly implement a striped Table.

## Standard Striped Function
When striping the table rows the functionality is the same if you are yielding a flat list of items and a section's items.  When mapping your data to table rows capture the index of each row pass it to your createRow method.
```diff
+ const createRows = data => data.map((childItem, index) => createRow(childItem, index));
```
Next within our newly created method for row creation we want to set the striping pattern by the UX approved pattern, on odd array indexed items. This pattern is true for both a flat list and within each section. To accomplish this we check whether or not index modulus 2 yields a non zero value, this will give us the odd values rows.
```diff
+ const createRow = (rowData, index) => (
+  <Row
+    key={rowData.key}
+    isStriped={index % 2 !== 0}
+   >
+     {createCellsForRow(rowData.cells)}
+   </Row>
+ );
```
We can then implement our additional static methods to populate the cell data.
```diff
+ const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

+ const createCellsForRow = cells => cells.map(cell => createCell(cell));
```
And finally we call our create row creation method.
```diff
+ const StripedTable = () => (
+   <Table
+     paddingStyle="standard"
+     headerRow={(
+       <HeaderRow>
+         <HeaderCell isPadded>Column 0</HeaderCell>
+         <HeaderCell isPadded>Column 1</HeaderCell>
+         <HeaderCell isPadded>Column 2</HeaderCell>
+       </HeaderRow>
+     )}
+   >
+     {createRows(mockData)}
+   </Table>
+ );
```
Using these steps we get the following example:
