# Terra List

The Terra List is a structural component to arrange content within list/listitems.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-list`
  - `yarn add terra-list`

## Usage

```jsx
import React from 'react';
import List from 'terra-list';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import MultiSelectList from 'terra-list/lib/MultiSelectList';

<List.Item
  content={<h1 blurb />}
  isSelected={true}
  isSelectable={true}
  hasChevron={false}
/>

<List isDivided={true}>
  <List.Item content={<h1 blurb />} />
  <List.Item content={<h1 blurb />} />
</List>

<SingleSelectList isDivided={true} hasChevrons={false}>
  <SingleSelectList.Item content={<h1 blurb />} />
  <SingleSelectList.Item content={<h1 blurb />} />
</SingleSelectList>

<MultiSelectList isDivided={true} maxSelectionCount={3}>
  <MultiSelectList.Item content={<h1 blurb />} />
  <MultiSelectList.Item content={<h1 blurb />} />
</MultiSelectList>

```

## Managed Lists
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

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

