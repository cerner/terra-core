# Terra TableCellGrid - Static Width Columns

## Define Width Array
The easiest method of synchronizing your Cells and HeaderCells is to first define width prop values by index.

```diff
+ const widths = [
+   { static: { value: 80, unit: 'px' } },
+   { static: { value: 55, unit: 'px' } },
+   { static: { value: 5, unit: 'rem' } },
+   { static: { value: 120, unit: 'px' } },
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
+ const StaticWidthTable = () => (
+   <TableCellGrid
+     paddingStyle="standard"
+     headerCellGrid={(
+       <HeaderCellGrid>
+         <HeaderCell isPadded key="cell-0" width={widths[0]}>60px</HeaderCell>
+         <HeaderCell isPadded key="cell-1" width={widths[1]}>45px</HeaderCell>
+         <HeaderCell isPadded key="cell-2" width={widths[2]}>5rem</HeaderCell>
+         <HeaderCell isPadded key="cell-3" width={widths[3]}>120px</HeaderCell>
+       </HeaderCellGrid>
+     )}
+   >
+     {createCellGrids(mockData)}
+   </TableCellGrid>
+ );
```
Set the widths of the header cells and CellGrid cells by applying the width array by index.
```diff
- const createCell = (cell, index) => <Cell isPadded key={cell.key}>{cell.title}</Cell>;
+ const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

- const createCellsForCellGrid = cells => cells.map((cell, index) => createCell(cell, index));
+ const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const StaticWidthTable = () => (
  <TableCellGrid
    paddingStyle="standard"
    headerCellGrid={(
      <HeaderCellGrid>
-       <HeaderCell isPadded key="cell-0">60px</HeaderCell>
-       <HeaderCell isPadded key="cell-1">45px</HeaderCell>
-       <HeaderCell isPadded key="cell-2">5rem</HeaderCell>
-       <HeaderCell isPadded key="cell-3">120px</HeaderCell>
+       <HeaderCell isPadded key="cell-0" width={widths[0]}>60px</HeaderCell>
+       <HeaderCell isPadded key="cell-1" width={widths[1]}>45px</HeaderCell>
+       <HeaderCell isPadded key="cell-2" width={widths[2]}>5rem</HeaderCell>
+       <HeaderCell isPadded key="cell-3" width={widths[3]}>120px</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    {createCellGrids(mockData)}
  </TableCellGrid>
);
```
Using these steps we get the following example:
