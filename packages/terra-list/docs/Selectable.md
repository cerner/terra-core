# Selectable List

The Terra Selectable List is a structural component to arrange content within list/listitems, that provides the foundation for managed selectable lists.

## Usage
In certain scenarios, consumers may wish to use a selectable list, but want to be able to actively managed the state of selection. In these cases the recommended pattern is to implement the SelectableList subcomponent, utilizing the SelectableList.Utils to manage the consumers state.

### Managed Single Select List

```jsx
class CustomSingleSelectList extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedIndex: SelectableList.Utils.initialSingleSelectedIndex(this.props.children) };
  }

  handleOnChange(event, index) {
    if (SelectableList.Utils.shouldHandleSingleSelect(this.state.selectedIndex, index)) {
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
    const { children, isDivided, onChange, hasChevrons } = this.props;
    return (
      <SelectableList
        isDivided={isDivided}
        onChange={this.handleOnChange}
        selectedIndexes={[this.state.selectedIndex]}
        hasChevrons={hasChevrons}
        disableUnselectedItems={false}
      >
        {children}
      </SelectableList>
    );
  }
}

```

### Managed Mutli Select List

```jsx
class CustomMultiSelectList extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedIndexes: SelectableList.Utils.initialMultiSelectedIndexes(props.children, props.maxSelectionCount) };
  }

  handleOnChange(event, index) {
    const { children, maxSelectionCount } = this.props;
    if (SelectableList.Utils.shouldHandleMultiSelect(children, maxSelectionCount, this.state.selectedIndexes, index)) {
      event.preventDefault();
      const newIndexes = SelectableList.Utils.updatedMultiSelectedIndexes(this.state.selectedIndexes, index);
      this.setState({ selectedIndexes: newIndexes });

      // Custom Selection Logic Here
    }
  }

  someFunction() {
    // Set state with custom function, update or deselect, etc
    this.setState({ selectedIndexes: someIndexes });
  }

  render() {
    const { children, isDivided, onChange, maxSelectionCount } = this.props;
    return (
      <SelectableList
        isDivided={isDivided}
        onChange={this.handleOnChange}
        selectedIndexes={this.state.selectedIndexes}
        disableUnselectedItems={this.state.selectedIndexes.length >= SelectableList.Utils.validatedMaxCount(children, maxSelectionCount)}
      >
        {children}
      </SelectableList>
    );
  }
}

```