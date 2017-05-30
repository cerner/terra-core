import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

function createListItems(items, selectedIndexes) {
  const listContent = items.map((item, itemIndex) => {
    const selected = selectedIndexes.indexOf(itemIndex) >= 0;
    const contentKey = itemIndex;
    return (
      <MultiSelectList.Item key={contentKey} content={item.content} isSelectable isSelected={selected} />
    );
  });

  return (
    listContent
  );
}

class listExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndexes: [] };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndexes) {
    this.setState({ selectedIndexes });
  }

  render() {
    const items = [{ content: <p>test 1</p> }, { content: <p>test 2</p> }, { content: <p>test 3</p> }];
    const listItems = createListItems(items, this.state.selectedIndexes);

    return (
      <div>
        <div id="selected-index">
          <h3>Max Selection of 2. Selected Item(s): {this.state.selectedIndexes.join(', ')}</h3>
        </div>
        <MultiSelectList onChange={this.handleSelection} maxSelectionCount={2}>
          {listItems}
        </MultiSelectList>
      </div>
    );
  }
}
export default listExample;
