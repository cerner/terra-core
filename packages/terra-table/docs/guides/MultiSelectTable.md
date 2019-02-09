# Terra Table - Implementing a Multi Select Table

In previous versions of the terra-table a multi select style table could be created as either a controlled version of SelectableTableRows or uncontrolled version of MultiSelectableRows.  These implementations suffered from inflexibility and performance concerns. Going foward terra-table is more granular, though this puts more reponsibility on the consumer to properly update their table rows with the appropriate state. The following is a guide to addressing those concerns in your implementation.

## State Management
The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC.

 First defaulting our state to an empty array in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { selectedKeys: [] };
  }
```
Next creating an event handler callback method to pass to the table row's "onSelect" prop. The "onSelect" will return the metaData prop passed it each table row.
```jsx
  handleRowSelection(event, metaData) {

  }
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```jsx
  handleRowSelection(event, metaData) {
    event.preventDefault();
  }
```
Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has selected or unselected the table row key in our state. So we use the utility method "updatedMulitSelectedKeys", which returns an array of the keys following the addition or removing of the key passed. We then set this as our state.
```jsx
  handleItemSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));
  }
```
Setting state will trigger another render. So in the render method we need generate our table rows with the updated isSelected and isSelectable props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.
[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)
```jsx
  createTableRow(rowData) {
    return (
      <Row
        key={itemData.key}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
Next we need to set up our metaData object with our key value, and attach the "onSelect" to our handler.
```jsx
  createTableRow(rowData) {
    return (
      <Row
        key={itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
For multi-select tables we need to set selectability based upon whether or not we have reached our max selection count.  Terra Table provides a helper for this, namely "shouldBeMultiSelectable", by providing our count, the currently selected key, and the key of the associated item.
```jsx
  createTableRow(rowData) {
    return (
      <Row
        key={itemData.key}
        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}
        metaData={{ key: itemData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
Next we need to check if the row is selected. As we support IE10 & 11, we cannot use "contains", so we use "indexOf" to determine if the key is present in our state array.
```jsx
  createTableRow(rowData) {
    return (
      <Row
        key={rowData.key}
        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, rowData.key)}
        isSelected={this.state.selectedKeys.indexOf(rowData.key) >= 0}
        metaData={{ key: rowData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
We can then stub out our static elements
```jsx
  const createCell = cell => (
    <Cell key={cell.key}>
      <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
    </Cell>
  );

  const createCellsForRow = cells => cells.map(cell => createCell(cell));
```
Finally we can implement a method to loop through our data and create the table row with our methods and call it from our render method.
Ensuring that we add the appropriate aria label for multiple selections.
```jsx
  createTableRows(data) {
    return data.map(childItem => this.createTableRow(childItem));
  }

  render() {
    return (
      <Table
        aria-multiselectable
        header={
          <Header>
            <HeaderCell>Column 0</HeaderCell>
            <HeaderCell>Column 1</HeaderCell>
            <HeaderCell>Column 2</HeaderCell>
          </Header> 
        }
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
  ```
  Using these steps we get the following example:
