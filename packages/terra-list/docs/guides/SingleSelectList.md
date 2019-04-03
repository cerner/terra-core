# Terra List - Implementing a Single Select List

The terra-list implementation requires controlled state if selections are required. As a result, selections are applied at child item generation from HOC state. The following guide will show you how to implement that state within a single row selection variant of list.

## State Management
The state of selection needs to be managed for the list in a HOC. In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC.

 First defaulting our state to a null value in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { selectedKey: null };
  }
```
Next creating an event handler callback method to pass to the list item's `onSelect` prop. The `onSelect` will return the metaData prop passed it each listItem.
```jsx
  handleItemSelection(event, metaData) {

  }
```
As a precaution we can `preventDefault` on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```jsx
  handleItemSelection(event, metaData) {
    event.preventDefault();
  }
```
A single select list normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state.
```jsx
  handleItemSelection(event, metaData) {
    event.preventDefault();
    if (this.state.selectedKey !== metaData.key) {
      this.setState({ selectedKey: metaData.key });
    }
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
For the single select list we set `isSelectable` for all items.
```jsx
  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isSelectable
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <Placeholder />
      </Item>
    );
  }
```
Finally we need to check if the item matches the selectedKey in state to set `isSelected`.
```jsx
  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <Placeholder />
      </Item>
    );
  }
```
Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the aria role of `"listbox"` for the list, as it is required for accessibility with selectable list options.
```jsx
  createListItems(data) {
    return data.map(childItem => this.createListItem(childItem));
  }

  render() {
    return (
      <List role="listbox">
        {this.createListItems(mockData)}
      </List>
    );
  }
  ```
  Using these steps we get the following example.