# Terra Table - Implementing a Single Select Table

In previous versions of the terra-table a single select style table could be created as either a controlled version of SelectableTableRows or uncontrolled version of SingleSelectableRows.  These implementations suffered from inflexibility and performance concerns. Going forward terra-table is more granular, though this puts more responsibility on the consumer to properly update their table rows with the appropriate state. The following is a guide to addressing those concerns in your implementation.

## State Management
The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC.

 First defaulting our state to a null value in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { selectedKey: null };
  }
```
Next creating an event handler callback method to pass to the table row's "onSelect" prop. The "onSelect" will return the metaData prop passed it each row.
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
A single select table normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state.
```jsx
  handleRowSelection(event, metaData) {
    event.preventDefault();
    if (this.state.selectedKey !== metaData.key) {
      this.setState({ selectedKey: metaData.key });
    }
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
For the single select table we set "isSelectable" for all items.
```jsx
  createTableRow(rowData) {
    return (
      <Row
        key={itemData.key}
        isSelectable
        metaData={{ key: itemData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
Finally we need to check if the item matches the selectedKey in state.
```jsx
  createTableRow(rowData) {
    return (
      <Row
        key={itemData.key}
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }
```
Then we can implement a method to loop through our data and create the table row with our methods and call it from our render method. 
```jsx
  createTableRows(data) {
    return data.map(childItem => this.createTableRow(childItem));
  }

  render() {
    return (
      <Table
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
}
  ```
  Using these steps we get the following example:
