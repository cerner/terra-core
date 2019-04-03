# Terra List - Implementing a Multi Select List

The terra-list implementation requires controlled state if selections are required. As a result, selections are applied when child items are generated from HOC state. The following guide will show you how to implement that state within a multiple items selection variant of list, as well as implement the additional narrowing requirements of a max selection for items.

## State Management
The state of selection needs to be managed for the list in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC.

First defaulting our state to an empty array in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { selectedKeys: [] };
  }
```
Next creating an event handler callback method to pass to the list item's `onSelect` prop. The `onSelect` will return the metaData prop passed it each listItem.
```jsx
  handleItemSelection(event, metaData) {

  }
```
As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```jsx
  handleItemSelection(event, metaData) {
    event.preventDefault();
  }
```
Terra list comes with additional helpers to manage state. In this case, we want to determine if the selection has selected or unselected the list item key in our state. So we use the utility method `updatedMulitSelectedKeys`, which returns an array of the keys following the addition or removing of the key passed. We then set this as our state.
```jsx
  handleItemSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));
  }
```
Setting state will trigger another render. So in the render method we need generate our list items with the updated `isSelected` and `isSelectable` props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.
[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)
```jsx
  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
      >
        <Placeholder />
      </Item>
    );
  }
```
Next we need to set up our `metaData` object with our key value, and attach the `onSelect` to our handler.
```jsx
  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <Placeholder />
      </Item>
    );
  }
```
For multi-select lists we need to set selectability based upon whether or not we have reached our max selection count.  Terra List provides a helper for this, namely `shouldBeMultiSelectable`, by providing our count, the currently selected key, and the key of the associated item.
```jsx
  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <Placeholder />
      </Item>
    );
  }
```
Finally we need to check if the item is selected. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array.
```jsx
  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}
        isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <Placeholder />
      </Item>
    );
  }
```
Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the aria role of `"listbox"` for the list, as it is required for accessibility with selectable list options. In addition, we need to assign the aria role for multiple selections, `aria-multiselectable`.
```jsx
  createListItems(data) {
    return data.map(childItem => this.createListItem(childItem));
  }

  render() {
    return (
      <List
        dividerStyle="standard"
        role="listbox"
        aria-multiselectable
      >
        {this.createListItems(mockData)}
      </List>
    );
  }
  ```
  Using these steps we get the following example.