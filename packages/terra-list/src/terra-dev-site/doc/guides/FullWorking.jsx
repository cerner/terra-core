import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Section,
  Subsection,
  Utils,
} from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const mockData = [
  {
    title: 'Section 0',
    key: 'section-key-0',
    childItems: [
      {
        title: 'Item 0-0',
        key: 'unique-0',
      },
      {
        title: 'Item 0-1',
        key: 'unique-1',
      },
      {
        title: 'Item 0-2',
        key: 'unique-2',
      },
      {
        title: 'Item 0-3',
        key: 'unique-3',
      },
      {
        title: 'Item 0-4',
        key: 'unique-4',
      },
    ],
  },
  {
    title: 'Section 1',
    key: 'section-key-1',
    childItems: [
      {
        title: 'Item 1-0',
        key: 'unique-10',
      },
      {
        title: 'Item 1-1',
        key: 'unique-11',
      },
      {
        title: 'Item 1-2',
        key: 'unique-12',
      },
      {
        title: 'Item 1-3',
        key: 'unique-13',
      },
      {
        title: 'Item 1-4',
        key: 'unique-14',
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
        isSelectable={Utils.shouldBeMultiselectable(3, this.state.selectedKeys, itemData.key)}
        isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <Placeholder title={itemData.title} style={{ height: '50px' }} />
      </Item>
    );
  }

  createSection(sectionData, index) {
    return (
      <Section
        key={sectionData.key}
        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        title={sectionData.title}
        onSelect={this.handleSectionSelection}
      >
        <Subsection
          key={`test-key-${index}`}
          isCollapsed={this.state.collapsedKeys.indexOf(`test-key-${index}`) >= 0}
          isCollapsible
          metaData={{ key: `test-key-${index}` }}
          title={`Subsection ${index}`}
          onSelect={this.handleSectionSelection}
        >
          {sectionData.childItems.map(childItem => this.createListItem(childItem))}
        </Subsection>
      </Section>
    );
  }

  createSections(data) {
    return data.map((section, index) => this.createSection(section, index));
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
