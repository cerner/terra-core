import React from 'react';
import FilterView from '../../../../FilterView';

class FilterViewListOnSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      callCount: 0,
      option: '',
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(value, option) {
    const { display } = option.props;
    this.setState({ option: display, callCount: this.state.callCount + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.callCount}</p>
        <p>{this.state.option}</p>
        <FilterView variant="list" onSelect={this.onSelect}>
          <FilterView.Option value="hello" display="Hello" key="hello" />
          <FilterView.Option value="goodbye" display="Good Bye" key="goodbye" />
        </FilterView>
      </div>
    );
  }
}

export default FilterViewListOnSelect;
