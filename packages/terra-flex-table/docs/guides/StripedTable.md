# Terra Table - Implementing a Striped Table

In previous versions of the terra-flex-table the striped style was derived using a nth-of-type selector, however this striping pattern does not work using section and subsections, as they are sibling elements of the same type. So in this implementation the responsibility of striping is moved to the TableRow itself. The following guide shows how to cleanly implement a striped table.

## Standard Striped Function
When striping the table rows the functionality is the same if you are yielding a flat list of items and a section's items.  When mapping your data to table rows capture the index of each row and pass it to your createTableRow method.
```jsx
const createTableRows = data => data.map((childItem, index) => createTableRow(childItem, index));
```
Next within our newly created method for row creation we want to set the striping pattern by the UX approved pattern, on odd array indexed items. This pattern is true for both a flat list and within each section. To accomplish this we check whether or not index modulus 2 yields a non zero value, this will give us the odd values rows.
```jsx
const createTableRow = (itemData, index) => (
  <Row
    key={itemData.key}
    isStriped={index % 2 !== 0}
  >
    {createCellsForRow(itemData.cells)}
  </Row>
);
```
We can then implement our additional static methods to populate the cell data.
```jsx
const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));
```
And finally we call our create row creation method.
```jsx
const StripedTable = () => (
  <Table
    header={(
      <Header>
        <HeaderCell>Column 0</HeaderCell>
        <HeaderCell>Column 1</HeaderCell>
        <HeaderCell>Column 2</HeaderCell>
      </Header>
    )}
  >
    {createTableRows(mockData)}
  </Table>
);
```

Using these steps we get the following example:
