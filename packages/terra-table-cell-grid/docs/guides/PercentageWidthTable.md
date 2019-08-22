# Terra TableCellGrid - Percentage Width Columns

## Define Width Array
The easiest method of synchronizing your Cells and HeaderCells is to first define width prop values by index.

```diff
+ const widths = [
+   { percentage: 20 },
+   { percentage: 40 },
+   { percentage: 10 },
+   { percentage: 30 },
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
+ const PercentageWidthTable = () => (
+   <TableCellGrid
+     paddingStyle="standard"
+     headerCellGrid={(
+       <HeaderCellGrid>
+         <HeaderCell isPadded key="cell-0">20%</HeaderCell>
+         <HeaderCell isPadded key="cell-1">40%</HeaderCell>
+         <HeaderCell isPadded key="cell-2">10%</HeaderCell>
+         <HeaderCell isPadded key="cell-3">30%</HeaderCell>
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

const PercentageWidthTable = () => (
  <TableCellGrid
    paddingStyle="standard"
    headerCellGrid={(
      <HeaderCellGrid>
-       <HeaderCell isPadded key="cell-0">20%</HeaderCell>
-       <HeaderCell isPadded key="cell-1">40%</HeaderCell>
-       <HeaderCell isPadded key="cell-2">10%</HeaderCell>
-       <HeaderCell isPadded key="cell-3">30%</HeaderCell>
+       <HeaderCell isPadded key="cell-0" width={widths[0]}>20%</HeaderCell>
+       <HeaderCell isPadded key="cell-1" width={widths[1]}>40%</HeaderCell>
+       <HeaderCell isPadded key="cell-2" width={widths[2]}>10%</HeaderCell>
+       <HeaderCell isPadded key="cell-3" width={widths[3]}>30%</HeaderCell>
      </HeaderCellGrid>
    )}
  >
    {createCellGrids(mockData)}
  </TableCellGrid>
);
```
Using these steps we get the following example:
