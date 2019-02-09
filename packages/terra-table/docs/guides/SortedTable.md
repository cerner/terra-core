# Terra Table - Implementing a Sorted Table

As table cell content is dynamic and the types of sorting can vary, consumers need to handle the state of their own sorting. The following guide lays out an example of managing sorting and state within a table implementation. There are further optimizations that can be made given an individual implementation of a data set, but this should serve as a framework for that.

## State Management
The state of the sort column needs to be managed for the table in a HOC. In this example we are going to be an object containing a unique key for the column and current sort direction.

 First defaulting our state to null in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { sortColumn: null };
  }
```
Next creating an event handler callback method to pass to the table row's "onSelect" prop. The "onSelect" will return the metaData prop passed it each header cell.
```jsx
  handleSortClick(event, metaData) {

  }
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```jsx
  handleSortClick(event, metaData) {
    event.preventDefault();
  }
```
In this example only one column will be sorted upon, so we'll need to keep track of which column was selected and the current state of sorting for the column. 3 states of column state will be handled, unsorted, sort ascending, and sort descending. A key was sent with the metaData, but an index could have also been used in an implementation where there is no possibility of the columns being rearranged.
```jsx
  handleSortClick(event, metaData) {
    event.preventDefault();
    if (!this.state.sortColumn || this.state.sortColumn.key !== metaData.key) {
      this.setState({ sortColumn: { key: metaData.key, direction: 'asc' } });
    } else {
      this.setState((prevState) => {
        if (prevState.sortColumn.direction === 'asc') {
          return { sortColumn: { key: metaData.key, direction: 'desc' } };
        }
        return { sortColumn: null };
      });
    }
  }
```
Settting state will trigger another render. So in the render method we need generate our head cells with the updated sort props. Each header cell while need a unique key.
```jsx
  createHeaderCell(key, title) {
    return (
      <HeaderCell
        key={itemData.key}
      >
        {title}
      </HeaderCell>
    );
  }
```
Next we need to set up our metaData object with our key value, and attach the "onSelect" to our handler.
```jsx
  createHeaderCell(key, title) {
    return (
      <HeaderCell
        key={key}
        metaData={{ key }}
        onSelect={this.handleSortClick}
      >
        {title}
      </HeaderCell>
    );
  }
```
For the ability to toggle sorting we set "isSelectable" for all header cells.
```jsx
  createHeaderCell(key, title) {
    return (
      <HeaderCell
        key={key}
        isSelectable
        metaData={{ key }}
        onSelect={this.handleSortClick}
      >
        {title}
      </HeaderCell>
    );
  }
```
Finally we need to check if the header cell matches the sortColumn.key in state. In the case the header cell isn't sorted no sort indicator value should be passed.
```jsx
  createHeaderCell(key, title) {
    let sort;
    if (this.state.sortColumn && this.state.sortColumn.key === key) {
      sort = this.state.sortColumn.direction;
    }
  
    return (
      <HeaderCell
        key={key}
        isSelectable
        sort={sort}
        metaData={{ key }}
        onSelect={this.handleSortClick}
      >
        {title}
      </HeaderCell>
    );
  }
```
In this example a simple object sort is parses the data, followed by a check for reversal.
```jsx
const sortData = (data, sortColumn) => {
  if (!sortColumn) {
    return data;
  }

  const dataCopy = Object.assign([], data);
  dataCopy.sort((a, b) => {
    const x = a.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();
    const y = b.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });

  return sortColumn.direction === 'asc' ? dataCopy : dataCopy.reverse();
};
```
Next we fill in the static methods for the example table rows.
```jsx
const columns = ['column-0', 'column-1', 'column-2'];

const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createTableRow = itemData => <Row key={itemData.key}>{createCellsForRow(itemData.cells)}</Row>;
```
Then we can implement a method to loop through our data and create the table row with our methods and call it from our render method. 
```jsx
  createTableRows(data) {
    const sortedData = sortData(data, this.state.sortColumn);
    return sortedData.map(childItem => createTableRow(childItem));
  }

  render() {
    return (
      <Table
        header={(
          <Header>
            {this.createHeaderCell('column-0', 'Breakfast')}
            {this.createHeaderCell('column-1', 'Animals')}
            {this.createHeaderCell('column-2', 'Flatware')}
          </Header>
        )}
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}
  ```
  Using these steps we get the following example:
