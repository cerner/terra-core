# Terra Table - Percentage Width Columns

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

## Create ROW and Cell Generation Functions
Add Rows

```diff
+ const createRow = rowData => (
+   <Row key={rowData.key}>
+     {createCellsForRow(rowData.cells)}
+   </Row>
+ );

+ const createRows = data => data.map(childItem => createRow(childItem));
```
Add Cells

```diff
+ const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

+ const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));
```
Define the functional component
```diff
+ const PercentageWidthTable = () => (
+   <Table
+     paddingStyle="standard"
+     headerRow={(
+       <HeaderRow>
+         <HeaderCell isPadded key="cell-0">20%</HeaderCell>
+         <HeaderCell isPadded key="cell-1">40%</HeaderCell>
+         <HeaderCell isPadded key="cell-2">10%</HeaderCell>
+         <HeaderCell isPadded key="cell-3">30%</HeaderCell>
+       </HeaderRow>
+     )}
+   >
+     {createRows(mockData)}
+   </Table>
+ );
```
Set the widths of the header cells and row cells by applying the width array by index.
```diff
- const createCell = (cell, index) => <Cell isPadded key={cell.key}>{cell.title}</Cell>;
+ const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

- const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));
+ const createCellsForRow = cells => cells.map(cell => createCell(cell));

const PercentageWidthTable = () => (
  <Table
    paddingStyle="standard"
    headerRow={(
      <HeaderRow>
-       <HeaderCell isPadded key="cell-0">20%</HeaderCell>
-       <HeaderCell isPadded key="cell-1">40%</HeaderCell>
-       <HeaderCell isPadded key="cell-2">10%</HeaderCell>
-       <HeaderCell isPadded key="cell-3">30%</HeaderCell>
+       <HeaderCell isPadded key="cell-0" width={widths[0]}>20%</HeaderCell>
+       <HeaderCell isPadded key="cell-1" width={widths[1]}>40%</HeaderCell>
+       <HeaderCell isPadded key="cell-2" width={widths[2]}>10%</HeaderCell>
+       <HeaderCell isPadded key="cell-3" width={widths[3]}>30%</HeaderCell>
      </HeaderRow>
    )}
  >
    {createRows(mockData)}
  </Table>
);
```
Using these steps we get the following example:
