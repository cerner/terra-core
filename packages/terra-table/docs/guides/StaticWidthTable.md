# Terra Table - Static Width Columns

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

## Create Row and Cell Generation Functions
Add Rows

```diff
+ const createRow = itemData => (
+   <Row key={itemData.key}>
+     {createCellsForRow(itemData.cells)}
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
+ const StaticWidthTable = () => (
+   <Table
+     paddingStyle="standard"
+     headerRow={(
+       <HeaderRow>
+         <HeaderCell isPadded key="cell-0" width={widths[0]}>60px</HeaderCell>
+         <HeaderCell isPadded key="cell-1" width={widths[1]}>45px</HeaderCell>
+         <HeaderCell isPadded key="cell-2" width={widths[2]}>5rem</HeaderCell>
+         <HeaderCell isPadded key="cell-3" width={widths[3]}>120px</HeaderCell>
+       </HeaderRow>
+     )}
+   >
+     {createRows(mockData)}
+   </Table>
+ );
```
Set the widths of the header cells and Row cells by applying the width array by index.
```diff
- const createCell = (cell, index) => <Cell isPadded key={cell.key}>{cell.title}</Cell>;
+ const createCell = (cell, index) => <Cell isPadded key={cell.key} width={widths[index]}>{cell.title}</Cell>;

- const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));
+ const createCellsForRow = cells => cells.map(cell => createCell(cell));

const StaticWidthTable = () => (
  <Table
    paddingStyle="standard"
    headerRow={(
      <HeaderRow>
-       <HeaderCell isPadded key="cell-0">60px</HeaderCell>
-       <HeaderCell isPadded key="cell-1">45px</HeaderCell>
-       <HeaderCell isPadded key="cell-2">5rem</HeaderCell>
-       <HeaderCell isPadded key="cell-3">120px</HeaderCell>
+       <HeaderCell isPadded key="cell-0" width={widths[0]}>60px</HeaderCell>
+       <HeaderCell isPadded key="cell-1" width={widths[1]}>45px</HeaderCell>
+       <HeaderCell isPadded key="cell-2" width={widths[2]}>5rem</HeaderCell>
+       <HeaderCell isPadded key="cell-3" width={widths[3]}>120px</HeaderCell>
      </HeaderRow>
    )}
  >
    {createRows(mockData)}
  </Table>
);
```
Using these steps we get the following example:
