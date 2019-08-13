# Terra TableCellGrid - Sections with Subsections

With the inclusion of sections in the table, there are two recommended patterns for created nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a table, but not both.

## State Management
As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern.

First defaulting our state to an empty array in the constructor. 
```jsx
  constructor(props) {
    super(props);

    this.state = { collapsedKeys: [] };
  }
```
Next creating an event handler callback method to pass to the section's "onSelect" prop. The "onSelect" callback will return the metaData prop passed to each section.
```jsx
  handleSectionSelection(event, metaData) {

  }
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```jsx
  handleSectionSelection(event, metaData) {
    event.preventDefault();
  }
```
Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method `updatedMulitSelectedKeys`, which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state.
```jsx
  handleSectionSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));
  }
```
Settting state will trigger another render. So in the render method we need to generate our sections with the updated isCollapsed and isCollapsible props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if items are placed within sections structurally.
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
Next we need to set up our metaData object with our key value, and attach the "onSelect" to our handler.
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
For rendering the collapsible section we set "isCollapsible" for all sections.
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
Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use "contains", so we use "indexOf" to determine if the key is present in our state array.
```jsx
  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
```
We can then implement the unpack of our data into our row cells.
```jsx
  const createCell = cell => (
    <Cell isPadded key={cell.key}>
      {cell.title}
    </Cell>
  );

  const createCellsForRow = cells => cells.map(cell => createCell(cell));

  const createRow = itemData => (
    <Row key={itemData.key}>
      {createCellsForRow(itemData.cells)}
    </Row>
  );

  const createSubsection = subsectionData => (
    <Subsection
      key={subsectionData.key}
      title={subsectionData.title}
      colSpan={3}
    >
      {subsectionData.childItems.map(childItem => createRow(childItem))}
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
      <Table
        paddingStyle="standard"
        header={
          <Header>
            <HeaderCell isPadded>Column 0</HeaderCell>
            <HeaderCell isPadded>Column 1</HeaderCell>
            <HeaderCell isPadded>Column 2</HeaderCell>
          </Header> 
        }
      >
        {this.createSections(mockData)}
      </Table>
    );
  }
```
Using these steps we get the following example:
