import React from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-sort';

const columns = ['column-0', 'column-1', 'column-2'];

const createCell = cell => (
  <Cell key={cell.key}>
    {cell.title}
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createTableRow = itemData => <Row key={itemData.key}>{createCellsForRow(itemData.cells)}</Row>;

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

class SortedTable extends React.Component {
  constructor(props) {
    super(props);
    this.createTableRows = this.createTableRows.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.createHeaderCell = this.createHeaderCell.bind(this);
    this.state = { sortColumn: null };
  }

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

  createTableRows(data) {
    const sortedData = sortData(data, this.state.sortColumn);
    return sortedData.map(childItem => createTableRow(childItem));
  }

  createHeaderCell(key, title) {
    let sort;
    if (this.state.sortColumn && this.state.sortColumn.key === key) {
      sort = this.state.sortColumn.direction;
    }
    return (
      <HeaderCell
        key={key}
        metaData={{ key }}
        onSelect={this.handleSortClick}
        sort={sort}
        isSelectable
      >
        {title}
      </HeaderCell>
    );
  }

  render() {
    return (
      <Table
        paddingStyle="standard"
        headerCells={[
          this.createHeaderCell('column-0', 'Breakfast'),
          this.createHeaderCell('column-1', 'Animals'),
          this.createHeaderCell('column-2', 'Flatware'),
        ]}
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}

export default SortedTable;
