# Terra TableCellGrid - Scalar Width Columns

## Define Width Array
The easiest method of synchronizing your Cells and HeaderCells is to first define width prop values by index.

```diff
+ const widths = [
+   { scalar: 2 },
+   { scalar: 1 },
+   { scalar: 3 },
+   { scalar: 4 },
+ ];
```

## Create CellGrid and Cell Generation Functions
Add CellGrids

```diff
+ const createCellGrid = itemData => (
+   <CellGrid key={itemData.key}>
+     {createCellsForCellGrid(itemData.cells)}
+   </CellGrid>
+ );

+ const createCellGrids = data => data.map(childItem => createCellGrid(childItem));
```
Add Cells

```diff
+ const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

+ const createCellsForCellGrid = cells => cells.map((cell, index) => createCell(cell, index));
```
Define the functional component
```diff
+ const ScalarWidthTable = () => (
+   <TableCellGrid
+     paddingStyle="standard"
+     headerCellGrid={(
+       <HeaderCellGrid>
+         <HeaderCell isPadded key="cell-0">Scalar 2</HeaderCell>
+         <HeaderCell isPadded key="cell-1">Scalar 1</HeaderCell>
+         <HeaderCell isPadded key="cell-2">Scalar 3</HeaderCell>
+         <HeaderCell isPadded key="cell-3">Scalar 4</HeaderCell>
+       </HeaderCellGrid>
+     )}
+   >
+     {createCellGrids(mockData)}
+   </TableCellGrid>
+ );
```
Set the widths of the header cells and cell grid cells by applying the width array by index.
```diff
- const createCell = (cell, index) => <Cell isPadded key={cell.key}>{cell.title}</Cell>;
+ const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

- const createCellsForCellGrid = cells => cells.map((cell, index) => createCell(cell, index));
+ const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const ScalarWidthTable = () => (
  <TableCellGrid
    paddingStyle="standard"
    headerCellGrid={(
      <HeaderCellGrid>
-       <HeaderCell isPadded key="cell-0">Scalar 2</HeaderCell>
-       <HeaderCell isPadded key="cell-1">Scalar 1</HeaderCell>
-       <HeaderCell isPadded key="cell-2">Scalar 3</HeaderCell>
-       <HeaderCell isPadded key="cell-3">Scalar 4</HeaderCell>
+       <HeaderCell isPadded key="cell-0" width={widths[0]}>Scalar 2</HeaderCell>
+       <HeaderCell isPadded key="cell-1" width={widths[1]}>Scalar 1</HeaderCell>
+       <HeaderCell isPadded key="cell-2" width={widths[2]}>Scalar 3</HeaderCell>
+       <HeaderCell isPadded key="cell-3" width={widths[3]}>Scalar 4</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    {createCellGrids(mockData)}
  </TableCellGrid>
);
```
Using these steps we get the following example:
