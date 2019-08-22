# Terra TableCellGrid - Implementing a Striped TableCellGrid

With the table cell grid the striping pattern for the implementation is responsibility of striping is on the CellGrid itself. The following guide shows how to cleanly implement a striped TableCellGrid.

## Standard Striped Function
When striping the table cell grids the functionality is the same if you are yielding a flat list of items and a section's items.  When mapping your data to table cell grids capture the index of each cell grid cell grid pass it to your createCellGrid method.
```diff
+ const createCellGrids = data => data.map((childItem, index) => createCellGrid(childItem, index));
```
Next within our newly created method for cell grid creation we want to set the striping pattern by the UX approved pattern, on odd array indexed items. This pattern is true for both a flat list and within each section. To accomplish this we check whether or not index modulus 2 yields a non zero value, this will give us the odd values cell grids.
```diff
+ const createCellGrid = (itemData, index) => (
+  <CellGrid
+    key={itemData.key}
+    isStriped={index % 2 !== 0}
+   >
+     {createCellsForCellGrid(itemData.cells)}
+   </CellGrid>
+ );
```
We can then implement our additional static methods to populate the cell data.
```diff
+ const createCell = cell => (
+   <Cell isPadded key={cell.key}>
+     {cell.title}
+   </Cell>
+ );

+ const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));
```
And finally we call our create cell grid creation method.
```diff
+ const StripedTable = () => (
+   <TableCellGrid
+     paddingStyle="standard"
+     headerCellGrid={(
+       <HeaderCellGrid>
+         <HeaderCell isPadded>Column 0</HeaderCell>
+         <HeaderCell isPadded>Column 1</HeaderCell>
+         <HeaderCell isPadded>Column 2</HeaderCell>
+       </HeaderCellGrid>
+     )}
+   >
+     {createCellGrids(mockData)}
+   </TableCellGrid>
+ );
```
Using these steps we get the following example:
