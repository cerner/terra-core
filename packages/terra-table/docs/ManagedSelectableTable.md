# Selectable (Managed) Tables

In certain scenarios, consumers may wish to use a selectable table, but would like to implement their own selection state management. In these cases, the recommended pattern is to implement the `SelectableTableRows` subcomponent, which provides the basic framework needed to implement selectable table rows, and then utilize the `SelectableTableRows.Utils` utility functions to manage the state. The `SelectableTableRows.Utils` property gives access to various selection management utility functions as well as table navigation KeyCodes. Use this component in place of the TableRows component.

## Managed Single Select Table Rows

```jsx
import Table from 'terra-table';

class CustomSingleSelectTable extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedIndex: Table.SelectableTableRows.Utils.initialSingleSelectRowIndex(this.props.children) };
  }

  handleOnChange(event, index) {
    if (Table.SelectableList.Utils.shouldHandleSingleSelectRowSelection(this.state.selectedIndex, index)) {
      event.preventDefault();
      this.setState({ selectedIndex: index });

      // Custom Selection Logic Here
    }
  }

  someFunction() {
    // Set state with custom function, update or deselect, etc
    this.setState({ selectedIndex: someIndex });
  }

  render() {
    const { children, onChange } = this.props;
    return (
      <Table.SelectableTableRows
        onChange={this.handleOnChange}
        selectedIndexes={[this.state.selectedIndex]}
      >
        {children}
      </Table.SelectableTableRows>
    );
  }
}

```
