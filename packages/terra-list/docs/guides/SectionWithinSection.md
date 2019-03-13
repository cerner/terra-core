# Terra List - Sections with Subsections

With the inclusion of sections in the list, there are two recommended patterns for creating nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a list, but not both.

## State Management
As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern.

First defaulting our state to an empty array in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { collapsedKeys: [] };
  }
```
Next creating an event handler callback method to pass to the section's `onSelect` prop. The `onSelect` will return the metaData prop passed it each section.
```jsx
  handleSectionSelection(event, metaData) {

  }
```
As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```jsx
  handleSectionSelection(event, metaData) {
    event.preventDefault();
  }
```
Terra list comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method `updatedMulitSelectedKeys`, which returns an array of the keys following the addition or removing of the key passed. We then set this as our state.
```jsx
  handleSectionSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));
  }
```
Settting state will trigger another render. So in the render method we need to generate our sections with the updated `isCollapsed` and `isCollapsible` props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.
[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)
```jsx
  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  }
```
Next we need to set up our `metaData` object with our key value, and attach the `onSelect` to our handler.
```jsx
  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  }
```
For the common collapsible sections we set `isCollapsible` for all sections.
```jsx
  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  }
```
Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up.
```jsx
  createSection(sectionData) {
    const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsed={isCollapsed}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
```
We can then implement the unpack of our data into our list items.
```jsx
const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder />
  </Item>
);

const createSubsection = subsectionData => (
  <Subsection
    key={subsectionData.key}
    title={subsectionData.title}
  >
    {subsectionData.childItems.map(childItem => createListItem(childItem))}
  </Subsection>
);
```
Then we can implement a method to loop through our data and create the section with our methods and call it from our render method.
```jsx
  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    return (
      <List dividerStyle="standard">
        {this.createSections(mockData)}
      </List>
    );
  }
  ```
  Using these steps we get the following example.
