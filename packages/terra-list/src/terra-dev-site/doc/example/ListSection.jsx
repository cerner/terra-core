import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item, Section, Utils } from 'terra-list/lib/List';

const mockData = [
  {
    title: 'Section 1',
    key: 'section-key-1',
    childItems: [
      {
        title: 'Item 1',
        key: 'unique-1',
      },
    ],
  },
];

class ListSectionExample extends React.Component {
  constructor(props) {
    super(props);
    this.createListItem = this.createListItem.bind(this);
    this.createSection = this.createSection.bind(this);
    this.createSections = this.createSections.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.state = { selectedKeys: [], collapsedKeys: [] };
  }

  handleItemSelection(event, metaData) {
    if (Utils.shouldHandleMultiSelect(3, this.state.selectedKeys, metaData.key)) {
      event.preventDefault();
      /* eslint-disable react/no-access-state-in-setstate */
      const newKeys = Utils.updatedMultiSelectedKeys(this.state.selectedKeys, metaData.key);

      this.setState({ selectedKeys: newKeys });
    }
  }

  handleSectionSelection(event, metaData) {
    event.preventDefault();
    /* eslint-disable react/no-access-state-in-setstate */
    const newKeys = Utils.updatedMultiSelectedKeys(this.state.collapsedKeys, metaData.key);
    this.setState({ collapsedKeys: newKeys });
  }

  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isDivided
        isSelectable
        isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}
        metaData={{ key: itemData.key }}
        onChange={this.handleItemSelection}
      >
        <span>
          {itemData.title}
        </span>
      </Item>
    );
  }

  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}
        isDivided
        metaData={{ key: sectionData.key }}
        header={<p onClick={event => this.handleSectionSelection(event, { key: sectionData.key})}>{sectionData.title}</p>}
      >
        {sectionData.childItems.map(childItem => this.createListItem(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    const sections = this.createSections(mockData);

    return (
      <List>
        {sections}
      </List>
    );
  }
}

export default ListSectionExample;
