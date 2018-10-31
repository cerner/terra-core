import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Utils,
} from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

class MutliSelectListExample extends React.Component {
  constructor(props) {
    super(props);
    this.createSection = this.createSection.bind(this);
    this.createSections = this.createSections.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.state = { selectedKey: null };
  }

  handleItemSelection(event, metaData) {
    if (Utils.shouldHandleSingleSelect(this.state.selectedKey, metaData.key)) {
      event.preventDefault();

      this.setState({ selectedKey: metaData.key });
    }
  }

  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isDivided
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <Placeholder title={itemData.title} style={{ height: '50px' }} />
      </Item>
    );
  }

  createListItems(data) {
    return data.map(childItem => this.createListItem(childItem));
  }

  render() {
    const sections = this.createListItems(mockData);

    return (
      <List>
        {sections}
      </List>
    );
  }
}

export default MutliSelectListExample;
