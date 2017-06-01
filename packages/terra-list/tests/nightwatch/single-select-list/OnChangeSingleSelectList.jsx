import React from 'react';

import SingleSelectList from '../../../lib/SingleSelectList';

function createListItems(items, selectedIndex) {
  const listContent = items.map((item, itemIndex) => {
    const selected = itemIndex === selectedIndex;
    const contentKey = itemIndex;
    return (
      <SingleSelectList.Item key={contentKey} content={item.content} isSelectable isSelected={selected} />
    );
  });

  return (
    listContent
  );
}

class listExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const items = [{ content: <p>test1</p> }, { content: <p>test1</p> }, { content: <p>test1</p> }];
    const listItems = createListItems(items, this.state.selectedIndex);

    return (
      <div>
        <div id="selected-index">
          <h3>Selected Item: {this.state.selectedIndex}</h3>
        </div>
        <SingleSelectList onChange={this.handleSelection}>
          {listItems}
        </SingleSelectList>
      </div>
    );
  }
}
export default listExample;
